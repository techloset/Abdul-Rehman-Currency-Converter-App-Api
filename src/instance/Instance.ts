import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL:
    "https://route-handler-bootcamp.vercel.app/api/http:/api.exchangeratesapi.io/v1/",
});

export default instance;
