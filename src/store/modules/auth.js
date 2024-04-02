import { registerAPI, signInAPI } from "@/api/auth";

const state = () => {
  return {
    userRegister: {},
    userLogin: {},
  };
};

const mutations = {
  setUserRegisterMutation(state, payload) {
    state.userRegister = payload;
  },
  setUserSignInMutation(state, payload) {
    state.userLogin = payload;
    localStorage.setItem("userLogin", JSON.stringify(payload));
  },
  setUserLoginFromLocalStorage(state, payload) {
    state.userLogin = payload;
  },
};

const actions = {
  //để call api
  async registerAction({ commit }, { data, router }) {
    const userRegister = await registerAPI(data);
    router.push("/sign-in");
    alert("Đăng ký thành công");
    commit("setUserRegisterMutation", userRegister);
  },

  async signInAction({ commit }, { data, router }) {
    try {
      const userLogin = await signInAPI(data);
      router.push("/");
      commit("setUserSignInMutation", userLogin);
    } catch {
      alert("Tài khoản của bạn không chính xác");
    }
  },
  loadUserLoginFromLocalStorageAction({ commit }) {
    let userLogin = {};
    if (localStorage.getItem("userLogin")) {
      userLogin = JSON.parse(localStorage.getItem("userLogin"));
    }
    commit("setUserLoginFromLocalStorage", userLogin);
  },
}; //action call api

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
