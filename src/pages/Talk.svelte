<script lang="ts">
  import { location } from "svelte-spa-router";
  import { getContext, onDestroy, onMount } from "svelte";
  import TalkCard from "../components/cards/TalkCard.svelte";
  import type { Lo } from "../services/course/lo";
  import type { Cache } from "../services/course/cache";
  import TopicNavigatorCard from "../components/cards/TopicNavigatorCard.svelte";
  import type { AnalyticsService } from "../services/analytics/analytics-service";
  import { currentLo } from "../services/course/stores";

  export let params: any = {};

  const cache: Cache = getContext("cache");
  const analytics: AnalyticsService = getContext("analytics");
  let lo: Lo = null;
  let title = "";

  let refreshPdf = true;

  const unsubscribe = location.subscribe((value) => {
    if (cache.course) {
      const ref = `/#${value}`;
      lo = cache.course.talks.get(ref);
      if (lo) {
        refreshPdf = !refreshPdf;
        analytics.pageLoad(params.wild, cache.course, lo);
        // noinspection TypeScriptValidateTypes
        currentLo.set(lo);
        title = lo.title;
      }
    }
  });

  onMount(async () => {
    await cache.fetchCourseFromTalk(params.wild);
    const ref = `/#/talk/${params.wild}`;
    lo = cache.course.talks.get(ref);
    analytics.pageLoad(params.wild, cache.course, lo);
    // noinspection TypeScriptValidateTypes
    currentLo.set(lo);
    title = lo.title;
  });

  onDestroy(async () => {
    unsubscribe();
  });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="container mx-auto py-4 h-screen">
  {#if lo}
    <div class="flex items-center justify-center h-auto text-base-content">
      <div class="w-full">
        {#key refreshPdf}
          <TalkCard {lo} />
        {/key}
      </div>
      <div class="hidden lg:block mx-2">
        <TopicNavigatorCard topic={lo.parent} />
      </div>
    </div>
  {/if}
</div>
