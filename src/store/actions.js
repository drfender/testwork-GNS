import {FILTER_USERS, INIT_USERS, SORT_USERS} from "./types";
const api = 'https://drfender.github.io/test/test.json';

const actions = {
  getUsers({commit}) {
    return fetch(api)
      .then((users) => users.json())
      .then((usersParsed) => {
        commit(FILTER_USERS, usersParsed)
        commit(INIT_USERS, usersParsed)
      })
  },
  filterUsersByValue({commit, state}, value) {
    const filteredUsers = state.users.filter(person => person['id'].toLowerCase().includes(value.toLowerCase()) ||
      person['name'].toLowerCase().includes(value.toLowerCase()) ||
      person['location'].toLowerCase().includes(value.toLowerCase()) ||
      person['currency'].toString().includes(value.toLowerCase()));
    commit(FILTER_USERS, filteredUsers)
  },

  sortUsersByCurrency({commit, state}) {

    const sortByCurrency = state.filteredUsers.sort((userA, userB)=> {
      return userA.currency - userB.currency
    })
    commit(SORT_USERS, sortByCurrency)
  },
  sortUsersByWord({commit, state}) {

    const sortByWord = state.filteredUsers.sort((a,b)=> {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    commit(SORT_USERS, sortByWord)
  },

  inverseSortUsersByWord({commit, state}) {

    const sortByWord = state.filteredUsers.sort((a,b)=> {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    commit(SORT_USERS, sortByWord.reverse())
  },

  inverseSortUsersByCurrency({commit, state}) {
    const sortByCurrency = state.filteredUsers.sort((userA, userB)=> {
      return userB.currency - userA.currency
    })
    commit(SORT_USERS, sortByCurrency)
  },
  sortUsersByLocation({commit, state}) {
    const sortByWord = state.filteredUsers.sort((a,b)=> {
      var x = a.location.toLowerCase();
      var y = b.location.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    commit(SORT_USERS, sortByWord)
  },
  inverseSortUsersByLocation({commit, state}) {

    const sortByWord = state.filteredUsers.sort((a,b)=> {
      var x = a.location.toLowerCase();
      var y = b.location.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    commit(SORT_USERS, sortByWord.reverse())
  },

};
export default actions
