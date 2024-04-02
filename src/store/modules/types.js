import {
  getTypesAPI,
  getTypeIngredientsAPI,
  getTypeSkinsAPI,
} from "@/api/types";

const state = () => {
  return {
    typeList: [],
    typeIngredientList: [],
    typeSkinList: [],
  };
};

const mutations = {
  setTypeMutation(state, payload) {
    state.typeList = payload;
  },
  setTypeIngredientMutation(state, payload) {
    state.typeIngredientList = payload;
  },
  setTypeSkinMutation(state, payload) {
    state.typeSkinList = payload;
  },
};

const actions = {
  async getTypeListAction(context, payload) {
    const data = await getTypesAPI(payload);
    context.commit("setTypeMutation", data);
  },
  async getTypeIngredientListAction(context, payload) {
    const data = await getTypeIngredientsAPI(payload);
    context.commit("setTypeIngredientMutation", data);
  },

  async getTypeSkinListAction(context, payload) {
    const data = await getTypeSkinsAPI(payload);
    context.commit("setTypeSkinMutation", data);
  },
}; //action call api

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
