import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import constants from '~/config/constants';

class HttpService {
  httpService: AxiosInstance;

  constructor() {
    this.httpService = axios.create({
      baseURL: constants.BASE_URL,
      timeout: 30000,
      timeoutErrorMessage: 'Tempo limite da requisição excedido.',
    });
    this.initInterceptors();
  }

  private initInterceptors() {
    this.httpService.interceptors.request.use(
      async (config: AxiosRequestConfig) => {
        return config;
      },
    );

    this.httpService.interceptors.response.use(
      async (response: AxiosResponse) => {
        return response;
      },
      async (error: AxiosError) => {
        console.log('REQUEST_FAILED ==>', error?.response);
        return Promise.reject(error?.response?.data || error);
      },
    );
  }
}

export const { httpService } = new HttpService();
