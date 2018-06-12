<template>
  <tbody>
  <tr v-for='person in filteredUsers' :key="person.id">
    <td>{{person.id}}</td>
    <td>{{person.name}}</td>
    <td>{{person.location}}</td>
    <td>{{person.currency}}</td>
  </tr>
  </tbody>
</template>


<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'infoTable',
    computed: mapGetters(['filteredUsers'])
  }
</script>
