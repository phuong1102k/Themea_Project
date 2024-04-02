import { createStore } from "vuex";
import blogs from "./modules/blogs";
import reviews from "./modules/reviews";
import products from "./modules/products";
import types from "./modules/types";
import auth from "./modules/auth";
import carts from "./modules/carts";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { blogs, reviews, products, types, auth, carts },
});

//  carts
