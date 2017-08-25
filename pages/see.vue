<template>
  <section class="page">
    <div class="see">
      <h1>请输入你的GitHub名字：</h1>
      <input v-model="name" type="text" class="see__input" placeholder="like HuaRongSAO">
      <a @click="printName()" href="javascript:0" class="see__button">see you</a>
    </div>
    <Bird id="bird"></Bird>
    <div class="you__repos">
      <ul class="items" v-for="(item, index) in youRepos">
        <li class="items__item">
          <a :href="item.html_url">
            <span>{{index + 1}}</span>
            <div class="items__item--desc">
              <p class="items__item--title">{{ item.name }}</p>
              <p>{{ item.description}}</p>
            </div>
            <div class="items__item--star">
              {{item.stargazers_count}}<i class="fa fa-star-o"></i>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import Bird from '~/components/Bird/Bird.vue'
  import axios from 'axios'
  export default {
    data: function () {
      return {
        name: '',
        youRepos: []
      }
    },
    components: {
      Bird,
    },
    methods: {
      printName: function () {
        let self = this
        axios(`https://api.github.com/users/${this.$data.name}/repos`).then(function (d) {
          self.youRepos = d.data
          setTimeout(function () {
            window.scrollTo(0, 280)
          }, 1000)
        }).catch(function (r) {
          console.log('err')
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "see";
</style>
