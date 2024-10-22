<template>
  <div v-for="(year, idx) of paginationConfig" :key="idx">
    <div
      class="mr-2"
      @click="selectYear(year)"
      :class="{
        'border-2': year === currentPage,
        'border-0': year !== currentPage,
      }"
    >
      {{ year }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { paginationConfig } from "../../configs/pagination-config";

interface PaginationInterface {
  currentPage: string;
}

defineProps<PaginationInterface>();
const emit = defineEmits<{
  (event: "selectYear", val: string): void;
}>();

const selectYear = (year: string) => {
  emit("selectYear", year);
};
</script>
