import {request} from './index'

// 获取首页banner数据
export function getHomeMultidata() {
    return request({
        url:'/home/multidata'
    })
}

// 获取首页tabcontrol数据
export function getHomeGoods(type,page)  {
    return request({
        url:'/home/data',
        params:{
            type:type,
            page:page
        }
    })
}