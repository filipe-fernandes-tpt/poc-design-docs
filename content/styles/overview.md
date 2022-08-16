---
title: Overview
headline: "Styles are elements like typography, color, and line heights. These
  are the variables used to create design tokens. As a single source of truth, a
  design token makes it possible for us to make changes from a centralized
  location. "
date: 2022-08-16T09:20:06.107Z
sections:
  - title: ""
    content: >-
      ![](/public/img/hmb-7we4to1xcvhszx9ujq.png)


      Styles comprise things like typography, border-radius, and color, which are then combined to form components, such as a button.


      ![](/public/img/0fyb52a-ow3onccitenwiq.png)


      Where components will be used multiple times, we update the values from a centralized location. This is done using **[design tokens](https://atlas.travelport.com/235fac9ab/p/511217)**, which form a fundamental part of the Atlas Design System.
    dosdonts:
      - description: ""
        do: /public/img/styles/screenshot_2022-08-15_at_14.42.08.png
        dont: /public/img/styles/screenshot_2022-08-15_at_14.42.21.png
  - title: Design tokens
    content: >-
      Design tokens are preset, named value pairs that help designers and
      developers create coherence across products. 


      These allow us to have a single source of truth about how typography, spacing, colors, line heights, and other style elements are combined into individual components. These are stored as ‘tokens’ and are pulled from a style library.


      They’re called ‘tokens’ because, like casino chips or subway tokens, they’re a way of representing a unit of value, and they remain the same, even if the value (such as the price of a subway ride) changes.


      ![](https://atlas.travelport.com/uploads/HY73ZYTHyTm8rgOaQx-f-w.png)


      Benefits of design tokens


      Using design tokens instead of hard coding the values gives us a more efficient way of managing styles across such a wide variety of products. 


      This reduces the amount of time, effort, and disruption it takes to make changes, and allows product teams to focus on bigger issues.


      Token hard coded


      ![](https://atlas.travelport.com/uploads/T-F0osvlp_hmUwjnoUjVBQ.png)


      Token coded


      ![](https://atlas.travelport.com/uploads/oziEthLwnIh_kQOPD1wKLQ.png)


      ### Token formats


      Design tokens are provided in a variety of formats:


      1. Custom properties, eg. `var(--myToken)`

      2. SASS

      3. SCSS

      4. commonJS

      5. JSON object

      6. module.js


      Visit **[Resources](https://atlas.travelport.com/235fac9ab/v/0/p/723619-developing-using-atlas/b/47171c)** for more in-depth information on using tokens in your project.
---
