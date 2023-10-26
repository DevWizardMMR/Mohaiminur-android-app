import axios from "axios";

const AxiosFetch = () => {
  const axiosInstance = axios.create({
    baseURL: "https://provisit-server.vercel.app/",
  });

  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = "this is header data";
    return config;
  });

  axiosInstance.interceptors.response.use((response) =>response);

  return axiosInstance;
};

export default AxiosFetch;
