// import Vuex from 'vuex';
import resolve from "./resolve";
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    resolve:resolve
  }
});