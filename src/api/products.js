import axiosAPI from ".";

export const getProductsAPI = () => {
  return axiosAPI.get("/products");
};

export const getProductSearchAPI = (product) => {
  return axiosAPI.get(`/products?name_like=${product}`);
};

export const getSummerProductsAPI = () => {
  return axiosAPI.get("/products?sale=Summer");
};

export const getProductDetailAPI = (productId) => {
  return axiosAPI.get(`/products/${productId}`);
};
