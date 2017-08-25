import axios from 'axios'
const getUser = (name = 'HuaRongSao') => {
  const _url = 'https://api.github.com/users/' + name
  return axios.get(_url).then(r => r.data).catch(() => null)
}
const getRepos = (name = 'HuaRongSao') => {
  const _url = `https://api.github.com/users/${name}/repos?sort`
  return axios.get(_url).then(r => r.data).catch(() => null)
}

const setUser = (name = 'HuaRongSao') => {
  return Promise.all([getUser(name), getRepos(name)]).then(function (r) {

    return {user: r[0], repos: r[1]}
  })
}

export default setUser
