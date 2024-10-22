<template>
  <div>
    <div class="text-xl text-center">Countries Widget</div>

    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div v-for="(country, idx) of countryList" :key="idx" class="py-3">
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

const { countryList, isLoading } = useGetCountriesQuery();
</script>
