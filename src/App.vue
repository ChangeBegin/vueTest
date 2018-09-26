<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!--<router-view/>-->
    <!--<p>helllo</p>-->
    <!--<input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update"/>-->

    <!--<div>-->
      <!--<group>-->
        <!--<cell title="title" value="value"></cell>-->
      <!--</group>-->
    <!--</div>-->
    <swiper :list="demo01_list" auto loop v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
    <br/>
    <!--<p>current index: {{demo01_index}}</p>-->
    <!--<x-button @click.native="demo01_index = 0">go to 0</x-button>-->
    <!--<x-button @click.native="demo01_index = 1">go to 1</x-button>-->
    <!--<x-button @click.native="demo01_index = 2">go to 2</x-button>-->
    <!--<br/>-->
    <!--<div>-->
      <!--<group :title="$t('cellname.switch')">-->
        <!--<radio title="type" v-model="type" :options="['1', '2', '3', '4', '5']"></radio>-->
      <!--</group>-->
      <!--<panel :header="$t('cellname.listimage')" :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel>-->
    <!--</div>-->

    ssss
  </div>
</template>
<!--<i18n>-->
  <!--Switch the type:-->
  <!--zh-CN: 切换样式-->
  <!--List of content with image:-->
  <!--zh-CN: 图文组合列表-->
  <!--More:-->
  <!--zh-CN: 查看更多-->
<!--</i18n>-->
<script>
import { Group, Cell, Swiper, XButton, Panel, Radio } from 'vux'
import axios from 'axios'

const baseList = [{
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg', // 404
  title: '送你一次旅行',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]
export default {
  name: 'App',
  components: {
    Group,
    Cell,
    Swiper,
    XButton,
    Panel,
    Radio
  },
  data () {
    return {
      demo01_list: baseList,
      demo01_index: 0,
      type: '1',
      list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
      footer: {
        title: this.$t('cellname.more'),
        url: 'http://vux.li'
      }
    }
  },
  methods: {
    demo01_onIndexChange (index) {
      this.demo01_index = index
    },
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  created () {
    this.$http.post('/api/back/product/toList.htm').then(({data}) => {
      console.log(data)
    })

    axios.get('/api/back/product/toList.htm')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
</style>
