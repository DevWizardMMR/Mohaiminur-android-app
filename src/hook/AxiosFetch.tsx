import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const AxiosFetch = () => {
  const axiosInstance = axios.create({
    baseURL: "https://provisit-server.vercel.app/",
    timeout:5000
  });

  axiosInstance.interceptors.request.use((config) => {
    const userToken:any = AsyncStorage.getItem("userToken");
    if(userToken){
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use((response) =>response);

  return axiosInstance;
};

export default AxiosFetch;
