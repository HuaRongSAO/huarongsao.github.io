<template>
  <div class="container">
    <HeaderTop/>
    <nuxt/>
  </div>
</template>

<script>
  import HeaderTop from '../components/HeaderTop/HeaderTop.vue'
  export default {
    components: {
      HeaderTop
    },
    beforeCreate: function () {
      if (!!this.$store.state.userStore) {
        this.$store.dispatch('setUserAction')
      }
    }
  }

</script>

<style scoped>

  @import "layout.scss";
</style>
