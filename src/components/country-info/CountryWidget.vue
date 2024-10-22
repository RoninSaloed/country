<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div class="py-3">
        <div class="border w-60 text-center py-2">
          <div>{{ countryCode.value }}</div>
          <div>{{ countryListHolidays[0].name }}</div>
          <div>{{ countryListHolidays[0].date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CountryList } from "../../use/useGetCountriesQuery";
import { useGetCountryHolidaysQuery } from "../../use/useGetCountryHoliday";

interface CountriesWidget {
  number: number;
  countryList: CountryList[];
}
const props = defineProps<CountriesWidget>();

const countryCode = props.countryList[props.number];
const { countryListHolidays, isLoading } = useGetCountryHolidaysQuery(
  countryCode.key
);
</script>
