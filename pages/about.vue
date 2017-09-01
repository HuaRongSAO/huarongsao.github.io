<template>
  <section class="page">
    <div style="padding-bottom: 100px">
      <Elephant/>
      <div class="resume">
        <div id="resume__info">
          <div class="resume__info--attr">
            <img :src="user.avatar_url">
          </div>
          <h1>陈华荣</h1>
          <p>{{ user.login }}</p>
          <p>个人网站: http://117.78.33.86</p>
          <p>Email: 1114282509@qq.com</p>
          <p>Github: <a :href="user.html_url">{{ user.html_url }}</a></p>
          <p>微博: weibo.com/chenhuarongsao</p>
          <p id="objective">Night gathers, and now my watch begins. It shall not end until my death. I shall take no
            wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die
            at my post. I am the sword in the darkness. I am the watcher on the walls. I am the fire that burns
            against the cold, the light that brings the dawn, the horn that wakes the sleepers, the shield that
            guards the realms of men. I pledge my life and honor to the Night’s Watch, for this night and all the
            nights to come.
          </p>

          <div class="resume__history">
            <dl>
              <dt>教育</dt>
              <dd>
                <p>厦门理工学院</p>
                <p>学科专业: 网络工程</p>
              </dd>
            </dl>
            <dl>
              <dt>证书</dt>
              <dd>
                <p>Linux 操作系统证书</p>
                <p>RHCSA（红帽初级认证）：Red Hat Certified System Administrator</p>
                <p>软件中级证书:数据库系统工程师</p>
              </dd>
            </dl>
            <dl>
              <dt>技能</dt>
              <dd>
                <ul>
                  <li>
                    <p>前端技能：</p>
                    <ol>
                      <li>CSS，Javascript,Html</li>
                      <li>ES6+babel</li>
                      <li>webpack 搭建项目手脚架（spa和mpa)</li>
                      <li>react+redux 的单页面应用</li>
                      <li>vue-cli + nuxt 的vue开发</li>
                      <li>响应式开发PC页面(ie8+)</li>
                      <li>移动端开发（多分辨率适配）</li>
                      <li>node Express 服务服务端开发</li>
                    </ol>
                  </li>
                  <li>
                    <p>数据库：</p>
                    <ol>
                      <li>MySQL</li>
                      <li>Mongodb</li>
                    </ol>
                  </li>
                  <li>
                    <p>其他语言：</p>
                    <ol>
                      <li>Python (Django) </li>
                    </ol>
                  </li>
                  <li>
                    <p>其他工具：</p>
                    <ol>
                      <li>Git</li>
                      <li>Svn</li>
                      <li>Git</li>
                    </ol>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Elephant from './../components/Elephant/Elephant.vue'
  export default {
    components: {
      Elephant
    },
    computed: {
      ...mapState({
        user: state => state.userStore.user
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "about";
</style>
