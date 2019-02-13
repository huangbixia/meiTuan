<template>
  <div class="header-detail">
    <div class="detail-wrapper clear-fix">
      <div class="detail-main">
        <h1 class="name">{{seller.name}}</h1>
        <div class="star-wrapper">
          <star :size="48" :score="seller.score"></star>
        </div>
        <div class="title">
          <div class="line"></div>
          <div class="text">优惠信息</div>
          <div class="line"></div>
        </div>
        <ul v-if="seller.supports" class="supports">
          <li class="support-item" v-for="(item, index) in seller.supports" :key="item.id">
            <support-ico :size="2" :type="seller.supports[index].type"></support-ico>
            <span class="text">{{sellers.supports[index].description}}</span>
          </li>
        </ul>
        <div class="title">
          <div class="line"></div>
          <div class="text">商家公告</div>
          <div class="line"></div>
        </div>
        <div class="bulletin">
            <p class="content">{{seller.bulletin}}></p>
        </div>
      </div>
    </div>
    <div class="detail-close" @click="hide">
        <i class="icon-close"></i>
    </div>
  </div>
</template>

<script>
import popupMixin from 'common/mixins/popup'
import Star from 'components/star/star'
import SupportIco from 'components/support-ico/support-ico'

export default {
    name: 'header-detail',
    mixins: [popupMixin],
    props: {
        seller: {
          type: Object,
          default () {
            return {}
          }
        }
    },
    components: {
      SupportIco,
      Star
    }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"

  .header-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow: auto
  
</style>
