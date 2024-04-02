import { getBlogsAPI } from "@/api/blogs";

const state = () => {
  return {
    blogList: [],
  };
};

const mutations = {
  setBlogMutation(state, payload) {
    state.blogList = payload;
  },
};

const actions = {
  async getBlogListAction(context, payload) {
    const data = await getBlogsAPI(payload);
    context.commit("setBlogMutation", data);
  },
}; //action call api

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
