import {request} from './request';

export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}



// import axios from './axios'

// export const BANNER = 'banner'
// export const RECOMMEND = 'recommend'

// export function getHomeMultidata() {
//   return axios({
//     url: '/home/multidata'
//   })
// }

// export function getHomeData(type, page) {
//   return axios({
//     url: '/home/data',
//     params: {
//       type,
//       page
//     }
//   })
// }