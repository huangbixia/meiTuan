<template>
  <div>
      <div class="shopcart">
          <div class="content">
              <div class="content-left">
                  <div class="logo-wrapper">
                      <div class="logo">
                          <i class="icon-shopping_cart"></i>
                      </div>
                      <div class="num"></div>
                  </div>
                  <div class="price">￥{{totalPrice}}</div>
                  <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
              </div>
              <div class="content-right">
                  <div class="pay">
                      {{payDesc}}
                  </div>
              </div>
          </div>
          <div class="ball-container">
              
          </div>
      </div>
  </div>    
</template>

<script>
export default {
    name: 'shop-cart',
    props: {
        selectFoods: {
            type: Array,
            default() {
                return []
            }
        },
        deliveryPrice: {
            type: Number,
            default: 0
        },
        myPrice: {
            type: Number,
            default: 0
        },    
        sticky: {
            type: Boolean,
            default: false
        },
        fold: {
            type: Boolean,
            default: true
        }    
    },
    data() {
        return {
            listFold: this.fole
        }
    },
    computed: {
      totalPrice() {
          let total = 0
          this.selectFoods.forEach((food) => {
              total += food.price * food.count
          });
      },
      totalCount() {
          let count = 0
          this.selectFoods.forEach((food) => {
              count += food.count
          })
          return count
      },
      payDesc() {
          if (this.totalPrice === 0) {
              return `￥${this.minPrice}元起送`
          } else if (this.totalPrice < this.minPrice) {
              let diff = this.minPrice - this.totalPrice
              return `还差￥${diff}元起送`
          } else {
              return '去结算'
          }
      },
      payClass() {
          if (!this.totalCount || this.totalPrice < this.minPrice) {
              return 'not-enough'
          } else {
              'enough'
          }
      }
    }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"

  .shopcart
    height: 100%
    .content
      display: flex
</style>