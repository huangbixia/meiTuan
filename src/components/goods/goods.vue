<template>
    <div class="goods">
        <div class="scroll-nav-wrapper">
            <cube-scroll-nav
              :side=true
              :data="goods"
              :options="scrollOptions"
              v-if="goods.length"
            >
            </cube-scroll-nav>
        </div>
    </div>    
</template>

<script>
import { getGoods } from 'api'
import SupportIco from 'components/support-ico/support-ico'

export default {
    name: 'goods',
    props: {
        data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            goods: [],
            scrollOptions: {
                click: false,
                directionLockThreshold: 0
            }
        }
    },
    computed: {
      seller() {
          return this.data.seller
      }
    },
    methods: {
        fetch() {
            if (!this.fetched) {
                this.fetched = true
                getGoods({
                    id: this.seller.id
                }).then((goods) => {
                    this.goods = goods
                })
            }
        }
    },
    components: {
        SupportIco
    }
}
</script>
