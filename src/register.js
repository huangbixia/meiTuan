import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from 'components/header-detail/header-detail'
import ShopCartList from 'components/shop-cart-list/shop-cart-list'
import ShopCartSticky from 'components/shop-cart-sticky/shop-cart-sticky'

// 组件直接挂载到body下
createAPI (Vue, HeaderDetail)
createAPI (Vue, ShopCartList)
createAPI (Vue, ShopCartSticky)