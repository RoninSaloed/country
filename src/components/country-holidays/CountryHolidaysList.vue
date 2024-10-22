<template>
  <div>{{ getCountry.value }}</div>
  <div class="py-2" v-for="(holiday, idx) of holidayList.value" :key="idx">
    <div class="border w-60 text-center py-2">
      <div>{{ holiday.localName }}</div>
      <div>{{ holiday.date }}</div>
    </div>
  </div>
  <sc-pagination :current-page="selectedYear" @select-year="selectYear" />
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useCountryStore } from "../../stores/application.store";
import { useGetCountryHolidaysOnYear } from "../../use/useGetCountryHolidaysOnYear";
import ScPagination from "../pagination/ScPagination.vue";

const store = useCountryStore();
const selectedYear = ref<string>(new Date().getFullYear().toString());

const { getCountry } = store;

const holidayList = computed(() => {
  const { holidayList } = useGetCountryHolidaysOnYear(
    getCountry.key,
    selectedYear.value
  );
  return holidayList;
});

const selectYear = (year: string) => {
  selectedYear.value = year;
};
</script>
