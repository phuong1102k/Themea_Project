import { getReviewsAPI } from "@/api/reviews";

const state = () => {
  return {
    reviewList: [],
  };
};

const mutations = {
  setReviewMutation(state, payload) {
    state.reviewList = payload;
  },
};

const actions = {
  async getReviewListAction(context, payload) {
    const data = await getReviewsAPI(payload);
    context.commit("setReviewMutation", data);
  },
}; //action call api

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
