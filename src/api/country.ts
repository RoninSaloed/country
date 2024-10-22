import { AxiosRequestConfig, AxiosResponse } from "axios";
import { axiosInstance } from "./axios-instances";
import { CountryResources } from "../resource";
import { CountryList } from "../use/usegetCountriesQuery";

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
}
export default new country();
