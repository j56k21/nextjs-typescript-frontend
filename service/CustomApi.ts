import axios, { AxiosError, AxiosInstance } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_HOST;

const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log("interceptor > error", error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.request.use(
    (config) => {
      const token = "???"; // 토큰 주입 (프로젝트 정책마다 다름)

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => {
      console.log("interceptor > error", error);
      Promise.reject(error);
    }
  );
};

const customAxios = () => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 2000,
  });
  setInterceptors(instance);

  return instance;
};
