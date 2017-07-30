<template>
  <div id="app">
    <div class="nav">
      <div class="header">
        <a href="#" class="user-pic" @click.stop='toggleSidebar'><img class="user-pic" src="./assets/userpic.jpg" alt="user-pic"></a>
        <a href="#" class="logo"><img src="./assets/cnodejs_light.svg" alt=""></a>
        <a href="#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
      </div>
      <div class="tab">
        <span class="current-tab">全部</span>
        <span>精华</span>
        <span>分享</span>
        <span>问答</span>
        <span>招聘</span>
      </div>
    </div>
    <router-view></router-view>
    <side-bar :class='{toggleDisplay: displaySidebar}'></side-bar>
    <div class="loading" v-if='loading'>
      玩命加载中...
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';

export default {
  name: 'app',
  data() {
    return {
      displaySidebar: true,
      loading: false,
    }
  },
  mounted () {
    document.onclick = (e) => {
      e.stopPropagation()
      this.displaySidebar = false;
    }
  },
  components: {
    'side-bar': Sidebar,
  },
  methods: {
    toggleSidebar (e) {
      // e.stopPropagation()
      this.displaySidebar = this.displaySidebar ? false:true
    },
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
.nav {
  top: 0;
  /*position: static;*/
}
.header {
  margin: 0;
  /*position: fixed;*/
  box-sizing: border-box;
  height: 60px;
  width: 100%;
  padding: 5px 5px;
  background: rgb(68, 68, 68);
  /*background: url(./assets/cnodejs.svg) no-repeat;*/
  /*background-position: center;*/
}
a.user-pic {
  display: inline-block;
  vertical-align: bottom;
  width: 15%;
}
a.add-topic {
  box-sizing: border-box;
  display: inline-block;
  width: 15%;
}
a.logo {
  display: inline-block;
  box-sizing: border-box;
  width: 70%;
  padding: 0 10px;
  vertical-align: super;
}
i {
  color: #ddd;
  font-size: 2.2em;
  vertical-align:super;
}
img.user-pic {
  width: 100%;
  /*height: 100%;*/
  border-radius: 50%;
}
div.tab {
  display: flex;
  background-color: #ddd;
}
div.tab span{
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #aaa;
  margin: 3px;
  padding: 2px 0;
  font-size: 0.8em;
  flex: auto;
  text-align: center;
}
div.tab .current-tab {
  background-color: #80bd01;
}
div.loading {
  text-align: center;
  background-color: #ddd;
  padding: 5px;
  font-size: 1.2em;
  font-weight: bold;
}
.sidebar {
  position: absolute;
  top: 60px;
  height: 255px;
  transition: all 0.3s ease-out;
  transform: translateX(-100px);
}
.toggleDisplay {
  transition: all 0.3s ease-out;
  transform: translateX(0);
}
</style>
