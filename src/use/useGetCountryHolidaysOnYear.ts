import { ref } from "vue";
import country from "../api/country";
export interface HolidayList {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  global: boolean;
  counties: string[];
  launchYear: number;
  types: string[];
}
export const useGetCountryHolidaysOnYear = (code: string, year: string) => {
  const holidayList = ref<HolidayList[]>([]);
  const isLoading = ref<boolean>(true);

  const getHolidaysOnYear = async () => {
    try {
      const data = await country.getCountryHolidaysListOnYear(code, year);
      holidayList.value = data;
    } catch (err) {
      console.log(err);
    } finally {
      isLoading.value = false;
    }
  };
  getHolidaysOnYear();

  return {
    holidayList,
    isLoading,
  };
};
