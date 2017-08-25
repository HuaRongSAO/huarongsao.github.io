import setUser from './api'

export const userStore = {
  state: {
    user: {},
    repos: {}
  },
  mutations: {
    SET_USER (state, {user, repos}) {
      state.user = user || {}
      state.repos = repos || {}
    }
  },
  actions: {
    setUserAction(context, name = 'HuaRongSAo'){
      setUser(name).then(function (data) {
        let {user, repos} = data
        context.commit('SET_USER', {user, repos})
      })
    },
  },
  getters: {
    getAvatarUrl (state) {
      return state.user.avatar_url
    }
  }
}
