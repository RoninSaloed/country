import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { CountryList } from "../use/useGetCountriesQuery";

export const useCountryStore = defineStore("country", () => {
  const defaultState = {
    key: "default country",
    value: "default country",
  };
  const selectedCountry = ref<CountryList>(defaultState);

  const setCountry = (country: CountryList) => {
    selectedCountry.value = country;
  };

  const getCountry = computed<CountryList>(() => {
    return selectedCountry.value;
  });
  return {
    getCountry,
    setCountry,
  };
});
