<template>
    <div class="tab">
        <cube-tab-bar
          :useTransition=false
          :showSlider=true
          :data="tabs"
          v-model="selectedLabel"
          ref="tabBar"
          class="border-bottom-1px">
        </cube-tab-bar>
        <div class="slide-wrapper">
            <cube-slide
              :loop=false
              :auto-play=false
              :show-dots=false
              :initial-index="index"
              ref="slide"
              :options="slideOptions"
              @change="onChange"
              @scroll="onScroll"
            >
                <!-- <cube-slide-item><goods></goods></cube-slide-item>
                <cube-slide-item><ratings></ratings></cube-slide-item>
                <cube-slide-item><seller></seller></cube-slide-item> -->
              <cube-slide-item v-for="(tab, index) in tabs" :key="index">
                  <component ref="component" :is="tab.component" :data="tab.data"></component>
              </cube-slide-item>
            </cube-slide>
        </div>
    </div>
</template>

<script>
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'

export default {
    name: "tab",
    props: {
        tabs: {
          type: Array,
          default() {
            return []
         }
        },
        initialIndex: {
            type: Number,
            default: 0
        }
    },
    components: {
        Goods,
        Ratings,
        Seller
    },
    data() {
        return {
            index: this.initialIndex,
            slideOptions: {
                listenScroll: true,
                probeType: 3,
                directionLockThreshold: 0
            }
        }
    },
    computed: {
        selectedLabel: {
            get() {
                return this.tabs[this.index].label
            },
            set(newVal) {
                this.index = this.tabs.findIndex((value) => {
                    return value.label === newVal
                });
            }
        }
    },
    mounted() {
        this.onChange(this.index)
    },
    methods: {
        onScroll(pos) {
         // 该方法是让tab滚动条跟着tab页视觉上一起移动，该算法需要画个图理解
        // pos为滚动的坐标
        const tabBarWidth = this.$refs.tabBar.$el.clientWidth   // 整个tab的宽度
        const slideWidth = this.$refs.slide.slide.scrollerWidth  // 整个slide的宽度
        const transform = -pos.x / slideWidth * tabBarWidth      // pos.x是负值，除以整个slide得到比例
        this.$refs.tabBar.setSliderTransform(transform)
        },
        onChange(current) {
            this.index = current 
            // 切换到对应的component，才加载component的数据
            const instance = this.$refs.component[current]
            if (instance && instance.fetch) {
                instance.fetch()
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
    
  .tab 
    display: flex
    flex-direction: column
    height: 100%
    >>> .cube-tab
      padding: 10px 0
    .slide-wrapper
        flex: 1
        overflow: hidden  
</style>