<template>
  <div>
    <div>{{ queryCountry }}</div>
    <div class="py-2" v-for="(holiday, idx) of holidayList.value" :key="idx">
      <div class="border w-60 text-center py-2">
        <div>{{ holiday.localName }}</div>
        <div>{{ holiday.date }}</div>
      </div>
    </div>
    <div class="flex">
      <sc-pagination :current-page="selectedYear" @select-year="selectYear" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useGetCountryHolidaysOnYear } from "../../use/useGetCountryHolidaysOnYear";
import ScPagination from "../pagination/ScPagination.vue";
import { useRoute } from "vue-router";
const currentRoute = useRoute();

const selectedYear = ref<string>(new Date().getFullYear().toString());
const queryCode = computed<string>(() => {
  if (currentRoute.query.code) {
    return currentRoute.query.code.toString();
  }
  throw new Error("code is not valid");
});

const queryCountry = currentRoute.query.country?.toString();

const holidayList = computed(() => {
  const { holidayList } = useGetCountryHolidaysOnYear(
    queryCode.value,
    selectedYear.value
  );
  return holidayList;
});

const selectYear = (year: string) => {
  selectedYear.value = year;
};
</script>
