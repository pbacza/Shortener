import axios, { AxiosInstance } from "axios";

export interface ApiResult<T> {
  data: T;
  status: number;
}

export class RestClient {
  private axiosClient: AxiosInstance;

  constructor(address: string) {
    this.axiosClient = axios.create({
      baseURL: address
    });
  }

  async get<T>(endpoint: string): Promise<ApiResult<T>> {
    const result = await this.axiosClient.get<T>(endpoint);

    return { data: result.data, status: result.status };
  }

  async post<T, U>(endpoint: string, object: U): Promise<ApiResult<T>> {
    const result = await this.axiosClient.post<T>(endpoint, object);

    return { data: result.data, status: result.status };
  }
}
