import {
  getProductsAPI,
  getSummerProductsAPI,
  getProductDetailAPI,
  getProductSearchAPI,
} from "@/api/products";
// getProductsBestSellerAPI,
const state = () => {
  return {
    productList: [],
    productSearchList: [],
    summerList: [],
    productDetail: {},
  };
};

const mutations = {
  setProductMutation(state, payload) {
    state.productList = payload;
  },
  setProductSearchMutation(state, payload) {
    state.productSearchList = payload;
  },
  setSummerProductMutation(state, payload) {
    state.summerList = payload;
  },
  setProductDetailMutation(state, payload) {
    state.productDetail = payload;
  },
};

const actions = {
  async getProductListAction(context, payload) {
    const data = await getProductsAPI(payload);
    context.commit("setProductMutation", data);
  },

  async getProductSearchAction(context, payload) {
    const data = await getProductSearchAPI(payload);
    context.commit("setProductSearchMutation", data);
  },

  async getSummerProductListAction(context, payload) {
    const data = await getSummerProductsAPI(payload);
    context.commit("setSummerProductMutation", data);
  },
  async getProductDetailAction(context, payload) {
    const data = await getProductDetailAPI(payload);
    context.commit("setProductDetailMutation", data);
  },
}; //action call api

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
