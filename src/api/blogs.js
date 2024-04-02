import axiosAPI from ".";
export const getBlogsAPI = () => {
  return axiosAPI.get("/blogs?_limit=5");
};
