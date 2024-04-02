import axiosAPI from ".";

export const registerAPI = (userRegister) => {
  return axiosAPI.post("/register", userRegister);
};

export const signInAPI = (userLogin) => {
  return axiosAPI.post("/login", userLogin);
};
