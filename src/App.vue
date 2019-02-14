<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <header-detail></header-detail>
  </div>
</template>

<script>
import VHeader from './components/v-header/v-header'
import { getSeller } from 'api'
import HeaderDetail from './components/header-detail/header-detail'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  components: {
    VHeader,
    HeaderDetail
  },
  methods: {
    _getSeller () {
      getSeller().then((seller) => {
        this.seller = seller
      })
    }
  },
  created () {
    this._getSeller()
  },
}
</script>
<style lang="stylus">
</style>
