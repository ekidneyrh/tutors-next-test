<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type { AnalyticsService } from "../services/analytics/analytics-service";
  import type { Cache } from "../services/course/cache";
  import CardDeck from "../components/cards/CardDeck.svelte";
  import type { Lo } from "../services/course/lo";
  import { currentLo, live } from "../services/course/stores";
  import { Wave } from "svelte-loading-spinners";

  let los: Lo[] = [];

  const cache: Cache = getContext("cache");
  const analytics: AnalyticsService = getContext("analytics");
  let refresh = false;
  let loading = true;
  let tickerTape = "Loading...";
  let courseNmr = 0;
  let total = 0;

  $ : total = courseNmr;
  let title = "All known Modules";


  onMount(async () => {
    live.set(true);
    const courses = await analytics.fetchAllCourseList();
    for (let i = 0; i < courses.length; i++) {
      const courseLo = await cache.fetchCourse(`${courses[i].url}.netlify.app`);
      if (courseLo != null) {
        if (courses[i].visits > 30) {
          courseNmr++;
          courseLo.lo.route = `#/course/${courses[i].url}.netlify.app`;
          courseLo.lo.summary = `Page views: ${courses[i].visits} <br> <small>Last access <br> ${courses[i].last} <small>`;
          los.push(courseLo.lo);
        }
        tickerTape = courseLo.lo.title;
      }
    }
    refresh = !refresh;
    loading = false;
    // noinspection TypeScriptValidateTypes
    currentLo.set({ title: `${courseNmr} Known Tutors Modules`, type: "tutors", parentLo: null, img: null });
  });

</script>

<div class="container mx-auto">
  {#if loading}

    <div class="border rounded-lg overflow-hidden mt-4 dark:border-gray-700">
      <div class="flex border justify-center items-center dark:border-gray-700">
        <Wave size="280" color="#FF3E00" unit="px" />
      </div>
    </div>
    {total} : {tickerTape}
  {:else}
    <CardDeck los={los} />
  {/if}
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
