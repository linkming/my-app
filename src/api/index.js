import axios from 'axios'
axios.interceptors.request.use((config) => {
    // console.log(config)
  return config
})
axios.interceptors.response.use(response => {
  // console.log('response',response)
  if (response.status === 200) {
    return response.data
  }
})
export default {
  getRun(id) {
    return axios({
      method: 'get',
      url: '/cloudmusic',
      params: {
        type: 'detail',
        id
      }
    })
  },
  getSongsByName(songsName) {
    return axios({
      method: 'get',
      // headers: {
      //   referer: 'https://c.y.qq.com/',
      //   host: 'c.y.qq.com'
      // },
      url: '/soso/fcgi-bin/client_search_cp',
      params: {
        aggr:1,
        cr:1,
        flag_qc:0,
        p:1,
        n:30,
        w: songsName,
      }
    })
  },
  comments(id) {
    return axios({
      method: 'get',
      url: '/cloudmusic',
      params: {
        type: 'comments',
        id
      }
    })
  }
}