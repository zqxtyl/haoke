import Vue from "vue";
import Vuex from "vuex";
import { getItem, setItem } from "@/utils/storage";

Vue.use(Vuex);
const HK_KEY = "HK_KEY";
export default new Vuex.Store({
  state: {
    //存储的是个对象
    user: getItem(HK_KEY),

    UId:''
  },
  getters: {},
  mutations: {
    setUser(state, data) {
      (state.user = data), setItem(HK_KEY, state.user);
    },
    getId(state,val){
      state.UId=val
    }
  },
  actions: {},
  modules: {},
});
