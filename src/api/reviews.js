import axiosAPI from ".";
export const getReviewsAPI = () => {
  return axiosAPI.get("/reviews?_limit=3&_expand=user&_expand=product");
};
