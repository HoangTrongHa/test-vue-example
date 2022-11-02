import Vue from "vue";
import Vuex from "vuex";
import { blog } from "./modules/blog";

import { RootState } from "./modules/types";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    version: "1.0.0", // a simple property
  },
  modules: {
    blog,
  },
  mutations: {},
  actions: {},
});
