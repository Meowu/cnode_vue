<template>
  <div id="app">
    <nav-bar v-show='!isContent'></nav-bar>
    <router-view></router-view>
    <!-- <side-bar :class='{toggleDisplay: displaySidebar}'></side-bar> -->
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import {mapState} from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      backtoTop: false,
    }
  },
  computed :{
    ...mapState([
      // 如果这里使用同名属性必须加'',并且是数组
    'displaySidebar',
    'loading',
    'isContent'
  ])
  },
  mounted () {
    // window.onload = () => {
    //   if (window.pageYOffset >= 300) {
    //     this.backtoTop = true
    //   }
    // }
    document.onclick = (e) => {
      // this.$store.dispatch('displaySidebar')
      e.stopPropagation()
    }
  },
  components: {
    'side-bar': Sidebar,
    'nav-bar': Navbar,
  },
  methods: {
    // toggleSidebar (e) {
    //   // e.stopPropagation()
    //   // this.displaySidebar = this.displaySidebar ? false:true
    // },

  }
};
</script>
<style scoped>
#app {
  font-family: 'Avenir',  Helvetica, '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  word-break: break-all;
  /*word-wrap: break-word;*/
}


</style>
