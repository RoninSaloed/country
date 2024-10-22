<template>
  <div class="px-3 py-2 flex justify-around">
    <country-list />
    <div class="w-2/3 border">
      <div class="text-xl text-center">Countries Widget</div>
      <div v-if="isLoading">Загрузка...</div>
      <div v-else-if="countryList.length === 0">Нет доступных стран.</div>
      <div v-else>
        <div v-for="(number, idx) in randomCountries" :key="idx">
          <country-widget :number="number" :country-list="countryList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import CountryList from "./components/country-info/CountryList.vue";
import CountryWidget from "./components/country-info/CountryWidget.vue";
import { numberHelper } from "./helpers/GetRandomNumbers";
import { useGetCountriesQuery } from "./use/useGetCountriesQuery";

const { countryList, isLoading } = useGetCountriesQuery();

const { getUniqueRandomNumbers } = numberHelper();

const countCountries = 3;

const randomCountries = computed<number[]>(() => {
  if (!isLoading.value && countryList.value.length > 0) {
    return getUniqueRandomNumbers(countCountries, countryList.value.length);
  }
  return [];
});
</script>
