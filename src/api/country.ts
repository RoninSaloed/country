import { AxiosRequestConfig, AxiosResponse } from "axios";
import { axiosInstance } from "./axios-instances";
import { CountryResources } from "../resource";
import { CountryList } from "../use/useGetCountriesQuery";
import { CountryListHolidays } from "../use/useGetCountryHoliday";

export type HttpTransport = {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
};

class country {
  transport: HttpTransport;
  constructor() {
    this.transport = axiosInstance;
  }
  async getAllCountries(): Promise<CountryList[]> {
    const { data } = await this.transport.get<CountryList[]>(
      CountryResources.getAllCountries()
    );

    return data;
  }

  async getCountryHolidays(code: string): Promise<CountryListHolidays[]> {
    const { data } = await this.transport.get<CountryListHolidays[]>(
      CountryResources.getCountryHoliday(code)
    );

    return data;
  }
}
export default new country();
