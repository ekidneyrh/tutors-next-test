# Tutors Changelog

## [3.4.4] - 2021-06-04

- fixed: blockquote in dark mode

## [3.4.3] - 2021-04-23

- margin tweek on unit card

## [3.4.2] - 2021-04-12

- added: particle animation on TutorsLive
- changed: theme options for code highlight: agate

## [3.4.1] - 2021-04-01

- fixed: support for heanet video
- added: make heanet poster more context specific

## [3.4.0] - 2021-03-25

- changed: switch from webpack to vite

## [3.3.1] - 2021-03-22

- changed: adjust youtube icon

## [3.3.0] - 2021-03-12

- added: Latex support in labs via Katex component

## [3.2.4] - 2021-03-03

- added: switch to webpack for build system
- changed: remove horizontal bars on card
- changed: card hover behaviour for cards

## [3.2.3] - 2021-03-01

- added: simplify analytics to TutorsTime only. Display T&C panel for same

## [3.2.2] - 2021-02-21

- added: in live view, show topic + lab image

## [3.2.1] - 2021-02-05

- added: no longer show step number on lab breadcrumbs
- changed: use native youtube player for youtube videos, vime for others..

## [3.2.0] - 2021-01-30

- added: allow users to go offline in live view
- added: live view opens in separate window
- added: live view includes analog clock
- changed: upgrade all dependencies
- changed: responsive layout for live title bar
- fix: analytics bug cleanup - first lab time data incorrect in some cases
- fix: pin code no longer extends profile bar with duplicates


## [3.1.3] - 2021-01-29

- changed: live view based on card layout
- changed: clamp all card summaries to 3 lines

## [3.1.2] - 2021-01-27

- fix: bug when new course with auth but no users yet.
- fix: use https for github image profile
- fix: load grid stylesheets globally to prevent screen flicker
- fix: dark mode style for students online count
- changed: improve title/subtitle choice on various pages

## [3.1.1] - 2021-01-27

- fix: remove inactive student after 5 mins from live view

## [3.1.0] - 2021-01-26

- added: new live view in profile menu

## [3.0.4] - 2021-01-18

- fix: correct layout for tutors time live view
- added: number of students live count
- fix: reset online count correctly

## [3.0.3] - 2021-01-15

- fix: open external links in blank tabs
- change: change icon for unit

## [3.0.2] - 2021-01-07

- change calendar button style in dark mode
- fix: lab navigation from table of contents now works if lab already active

## [3.0.1] - 2021-01-06

- reset scroll position on each lab step change
- border around tooltip
- support global video hide
- introduce horizontal menu on labs
- fix: video (without pdf) link

## [3.0.0] - 2021-01-04

- First port of new version - Replace UIKit with Tailwind
