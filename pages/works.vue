<template>
  <section class="page">
    <Gear></Gear>
    <div class="works">
      <div class="works__content">
        <div>
          <tabs>
            <tab name="github" class="isActive">
              <ul class="items" v-for="(item, index) in repos">


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
            </tab>
            <tab name="线上">
              <ul class="items" v-for="(item, index) in online">


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
            </tab>
          </tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Gear from './../components/Gear/Gear.vue'
  import {online} from './../static/online'
  import {Tabs, Tab} from 'vue-tabs-component'

  export default {
    data: function () {
      return {online: online}
    },
    components: {Gear, Tabs, Tab},
    computed: {
      ...mapState({
        repos: state => state.userStore.repos
      })
    }
  }
</script>
<style lang="scss">
  @import "works";
</style>
