<template>
  <div id="app">
    <search/>
    <table>
      <headTable/>
      <infoTable/>
    </table>
    <total/>
  </div>
</template>

<script>
  import infoTable from './components/infoTable'
  import headTable from './components/headTable'
  import total from "./components/total";
  import search from './components/search'
  import store from './store/index.js'
  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    name: 'App',
    components: {
      infoTable,
      headTable,
      total,
      search
    },
    store: store,
    computed: {
      ...mapGetters(['users']),
    },
    methods: mapActions(['getUsers']),
    created() {
      this.getUsers({});
    },
  }
</script>
<style>
  body {
    background: #20262E;
    padding: 20px;
    font-family: Helvetica;
  }

  #app {
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    transition: all 0.2s;
  }

  table {
    width: 100%;
  }

  form input {
    display: block;
  }

  th {
    text-align: left;
  }
</style>


