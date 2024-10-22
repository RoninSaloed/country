<template>
  <div class="px-3 py-2 flex justify-around">
    <country-list />
    <div class="w-2/3 border"><country-widget /></div>
  </div>
</template>
<script setup lang="ts">
import CountryList from "./components/country-info/CountryList.vue";
import CountryWidget from "./components/country-info/CountryWidget.vue";
</script>
