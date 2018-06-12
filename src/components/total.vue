<template>
  <div>
    Итого: {{money}}
  </div>

</template>

<script>
  export default {
    name: 'total',
    computed: {
      money() {
        return this.$store.getters.filteredUsers.reduce((summ, item) => summ + item.currency, 0)
      }
    }
  }
</script>

<style scoped>
  div {
    text-align: right;
    font-weight: bolder;
    font-size: 40px
  }
</style>
