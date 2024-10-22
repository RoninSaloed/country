import { ref } from "vue";
import country from "../api/country";
export interface CountryList {
  key: string;
  value: string;
}
export const useGetCountriesQuery = () => {
  const countryList = ref<CountryList[]>([]);
  const isLoading = ref<boolean>(true);

  const getCountries = async () => {
    try {
      const data = await country.getAllCountries();
      countryList.value = data;
    } catch (err) {
      console.log(err);
    } finally {
      isLoading.value = false;
    }
  };
  getCountries();

  return {
    countryList,
    isLoading,
  };
};
