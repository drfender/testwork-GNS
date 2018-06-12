import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';
import mutations from './mutations';
import getters from './getters'

Vue.use(Vuex);
const initialState = {
  users: [],
  filteredUsers: [],
  loading: false
};
const store = new Vuex.Store({
  state: initialState,
  mutations: mutations,
  getters: getters,
  actions: actions
});
export default store
