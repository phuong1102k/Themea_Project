import axios from "axios";
import configs from "../configs";

const axiosAPI = axios.create({
  baseURL: configs.baseURL,
  // headers  set kiểu dữ liệu truyền từ server -> client, client ->server, mặc định json, timeout - quá tgian ko thực hiện đc sẽ ngừng gọi API đó nữa
});

// trung gian client gửi dữ liệu lên server
axiosAPI.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// trung gian server gửi về client
axiosAPI.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosAPI;
