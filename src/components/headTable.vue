<template>
  <thead>
  <th>ID</th>
  <th>Name 
    <b @click='sortUsersByWord'>↓</b>
    <b @click='inverseSortUsersByWord'>↑</b>
  </th>
  <th>location
    <b @click='sortUsersByLocation'>↓</b>
    <b @click='inverseSortUsersByLocation'>↑</b>
  </th>
  <th>currency
    <b @click='sortUsersByCurrency'>↓</b>
    <b @click='inverseSortUsersByCurrency'>↑</b>
  </th>
  </thead>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'headTable',
    methods: mapActions(['sortUsersByCurrency',
                         'sortUsersByWord',
                         'inverseSortUsersByCurrency',
                         'inverseSortUsersByWord',
                         'sortUsersByLocation',
                         'inverseSortUsersByLocation'
                        ])
  }
</script>

<style scoped>
  th {
    cursor: pointer
  }
</style>

