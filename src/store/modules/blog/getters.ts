import { GetterTree } from "vuex";
import { BlogState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<BlogState, RootState> = {
  blogs(state): any {
    const { blogs } = state;
    return blogs;
  },
};
