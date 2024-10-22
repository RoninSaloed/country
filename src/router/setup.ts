import { createRouter, createWebHashHistory } from "vue-router";

import { Routes } from ".";
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: Routes.N_HOME,
      path: Routes.ABSOLUTE_HOME,
      alias: "/",
      component: () => import("../Home.vue"),
    },
    {
      name: Routes.N_Holidays,

      path: Routes.ABSOLUTE_COUNTRY_HOLIDAYS,
      component: () =>
        import("../components/country-holidays/CountryHolidaysList.vue"),
    },
  ],
});
