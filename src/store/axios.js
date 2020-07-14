import axios from "axios";
import router from './../Routes'

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem("authenticated")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    console.log(error);
    if (error.response.status === 401) {
      router.push("/")
    }
  }
);

export default axios;
