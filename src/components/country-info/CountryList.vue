<template>
  <div>
    <sc-input v-model="textInput" placeholder="input" />
    {{ textInput }}
    <div class="text-xl">CountriesList</div>

    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div v-for="(country, idx) of searchCountries" :key="idx" class="py-3">
        <div class="border w-60 text-center py-2">{{ country.value }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import {
  CountryList,
  useGetCountriesQuery,
} from "../../use/usegetCountriesQuery";
import ScInput from "../shared/ScInput.vue";

const { countryList, isLoading } = useGetCountriesQuery();
const textInput = ref<string>("");

const searchCountries = computed<CountryList[]>(() => {
  if (textInput.value?.length !== 0) {
    return countryList.value.filter((country) =>
      country.value.toLowerCase().includes(textInput.value.toLowerCase())
    );
  }
  return countryList.value;
});
</script>
