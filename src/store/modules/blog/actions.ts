import { ActionTree } from 'vuex';
import axios from 'axios';
import { BlogState, Blog } from './types';
import { RootState } from '../types';


export const actions: ActionTree<BlogState, RootState> = {
  fetchData({ commit }): any {
    axios({
      url: process.env.VUE_APP_API,
    }).then((response) => {
      const payload: Blog = response && response.data;
      commit('blogLoaded', payload);
    }, (error) => {
      console.log(error);
      commit('blogError');
    });
  },
};