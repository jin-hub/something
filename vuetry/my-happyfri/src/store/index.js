import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0,
    time: 0
  },
  mutations: {
    abcdScore(state, value) {
      state.score = value;
    },
    abcdTime(state, value) {
      state.time = value;
    }
  },
  actions: {},
  modules: {}
});
