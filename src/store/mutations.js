import {FILTER_USERS, INIT_USERS, SORT_USERS} from "./types";

const mutations = {
  [INIT_USERS](state, users) {
    state.users = users;
  },
  [FILTER_USERS](state, filteredUsers) {
    state.filteredUsers = filteredUsers
  },
  [SORT_USERS](state, filteredUsers) {
    state.filteredUsers = filteredUsers
  }
};
export default mutations
