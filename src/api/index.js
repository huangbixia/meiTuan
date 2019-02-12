import { get } from './helper'

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')

// 导出方法
export {
    getSeller,
    getGoods
}