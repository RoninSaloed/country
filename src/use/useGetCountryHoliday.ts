import { ref } from "vue";
import country from "../api/country";
export interface CountryListHolidays {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  global: boolean;
  counties: string;
  launchYear: number;
  types: string;
}
export const useGetCountryHolidaysQuery = (code: string) => {
  const countryListHolidays = ref<CountryListHolidays[]>([]);
  const isLoading = ref<boolean>(true);

  const countries = async () => {
    try {
      const data = await country.getCountryHolidays(code);
      countryListHolidays.value = data;
    } catch (err) {
      console.log(err);
    } finally {
      isLoading.value = false;
    }
  };
  countries();

  return {
    countryListHolidays,
    isLoading,
  };
};
