<template>
  <input
    type="text"
    class="border border-black"
    :placeholder="placeholder"
    v-model="modelValue"
  />
</template>

<script setup lang="ts">
export interface InputInterface {
  placeholder: string;
}
withDefaults(defineProps<InputInterface>(), {
  placeholder: "",
});

const modelValue = defineModel<string | null>({ default: "" });
</script>
