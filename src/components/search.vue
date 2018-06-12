<template>
  <input :autofocus='true' type="text" @input="(e) => filterUsersByValue(e.target.value)" placeholder="Type to search">
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'search',
    methods: mapActions(['filterUsersByValue'])
  }
</script>

<style scoped>
  input {
    font-size: 34px;
    text-align: center;
    margin: 0 auto;
    width: 50%;
    display: block;
    /* border: 1px solid;
    border-radius: 8px; */
    font-style: italic;
    outline: none;
    padding: 10px;
    /* border: 0; */
    margin-bottom: 25px;
  }
</style>

