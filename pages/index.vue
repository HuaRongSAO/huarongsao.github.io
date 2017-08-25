<template>
  <section class="page">
    <Bubble></Bubble>
    <div class="info">
      <div class="info__attr">
        <img :src="user.avatar_url">
      </div>
      <div class="info__content">
        <h3>{{ user.login }}</h3>
        <p>
          这是一名程序员
        </p>
        <div class="info__content--link">
          <a href="about">
            关于我
          </a>
          <a href="works">
            作品
          </a>
          <a :href="user.html_url">
            github
          </a>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  import axios from 'axios'
  import {mapState} from 'vuex'
  import Bubble from '~/components/Bubble/Bubble.vue'
  export default {
    components: {
      Bubble
    },
    computed: {
      ...mapState({
        user: state => state.userStore.user
      })
    }
  }

</script>

<style lang="scss">
  @import "index";
</style>
