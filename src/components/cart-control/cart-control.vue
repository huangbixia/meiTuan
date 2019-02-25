<template>
    <div class="cartcontrol">
        <transition name="move">
          <div class="cart-decrease" v-show="food.count > 0" @click.stop="decrease">
              <span class="inner icon-remove_circle_outline"></span>
          </div>
        </transition>  
        <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>      
        <div class="cart-add icon-add_circle" @click.stop="add"></div>
    </div>
</template>

<script>
export default {
    name: "cart-control",
    props: {
        food: {
            type: Object
        }
    },
    methods: {
      add() {
          if (!this.food.count) {
              // 给this.food对象赋值一个属性，且要同步影响到模版的数据变化
              this.$set(this.food, 'count', 1)  // 增加count属性，赋值为1
          } else {
              this.food.count++
          }
      },
      decrease() {
          if (this.food.count) {
              this.food.count--
          }
      }
    }
}
</script>