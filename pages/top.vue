<template>
  <section class="page">
    <div>
      <Flower/>
      <div style="height: 300px"></div>

      <div class="top">
        <h1 class="top__title">前端Top100</h1>
        <div class="top__content">
          <tabs>
            <tab name="排行">

              <ul class="items" v-for="(item,index) in hot">
                <li class="items__item">
                  <a :href="`https://github.com/${item.owner}/${item.alia}`">
                    <span>{{ index + 1 }}</span>
                    <div class="items__item--img">
                      <img :src="`https://awesomes.oss-cn-beijing.aliyuncs.com/repo/${item.cover}`">
                    </div>
                    <div class="items__item--desc">
                      <p class="items__item--title">{{ item.name }}</p>
                      <p>{{ item.description_cn }}</p>
                    </div>
                    <div class="items__item--star">
                      <i class="fa fa-star-o"></i>
                    </div>
                  </a>
                </li>

              </ul>
            </tab>
            <tab name="趋势">
              <ul class="items" v-for="(item,index) in trend">
                <li class="items__item">
                  <a :href="`https://github.com/${item.owner}/${item.alia}`">
                    <span>{{ index + 1 }}</span>
                    <div class="items__item--img">
                      <img :src="`https://awesomes.oss-cn-beijing.aliyuncs.com/repo/${item.cover}`">
                    </div>
                    <div class="items__item--desc">
                      <p class="items__item--title">{{ item.name }}</p>
                      <p>{{ item.description_cn }}</p>
                    </div>
                    <div class="items__item--star">
                      <i class="fa fa-star-o"></i>
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
  import Flower from './../components/Flower/Flower.vue'
  import {Tabs, Tab} from 'vue-tabs-component'
  import axios from 'axios'
  const getTop100 = (type) => {
    return axios(`https://api.awesomes.cn/repo/top100?sort=${type}`).then(r => r.data)
  }


  export default {
    data: function () {
      return {
        hot: [],
        trend: []
      }
    },
    components: {
      Flower, Tabs, Tab
    },
    beforeMount: function () {
      getTop100('hot').then((hot) => {
          this.hot = hot
        }
      )
      getTop100('trend').then((trend) => {
        this.trend = trend
      })
    }
  }
</script>

<style lang="scss">
  @import "top";
</style>
