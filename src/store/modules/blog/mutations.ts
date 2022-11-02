import { MutationTree } from "vuex";
import { BlogState, Blog } from "./types";

export const mutations: MutationTree<BlogState> = {
  blogLoaded(state, payload: Blog) {
    state.error = false;
    state.blogs = payload;
  },
  blogError(state) {
    state.error = true;
    state.blogs = {
      items: [
        {
          description : '123'
        }
      ] as any,
    };
  },
};
