import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { BlogState } from "./types";
import { RootState } from "../types";

export const state: BlogState = {
  blogs: {
    items: [],
  },
  error: false,
};

const namespaced = true;

export const blog: Module<BlogState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
