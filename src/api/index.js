import { get } from './helper'

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')
const getRatings = get('/api/ratings')

// 导出方法
export {
    getSeller,
    getGoods,
    getRatings
}