<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <side-bar :class='{toggleDisplay: displaySidebar}'></side-bar>
    <div class="loading" v-show='loading'>
      玩命加载中...
    </div>
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
    }
  },
  computed :{
    ...mapState([
      // 如果这里使用同名属性必须加'',并且是数组
    'displaySidebar',
    'loading'
  ])
  },
  mounted () {
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
  font-family: 'Avenir',  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

div.loading {
  text-align: center;
  background-color: #ddd;
  padding: 5px;
  font-size: 1.2em;
  font-weight: bold;
}

</style>
