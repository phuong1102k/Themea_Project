import axiosAPI from ".";
export const getTypesAPI = () => {
  return axiosAPI.get("/types?type=Product");
};

export const getTypeIngredientsAPI = () => {
  return axiosAPI.get("/types?type=Ingredient");
};

export const getTypeSkinsAPI = () => {
  return axiosAPI.get("/types?type=Skin Type");
};
