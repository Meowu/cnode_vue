<template lang="html">
  <div class="nav-bar">
    <div class="nav">
      <div class="header">
        <span class="user-pic" @click.stop='login'><img class="user-pic" src="../assets/userpic.jpg" alt="user-pic"></span>
        <span class="logo"><img src="../assets/cnodejs_light.svg" alt=""></span>
        <span ><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
      </div>
      <div class="tab">
        <a :class="{current_tab: isCurrent==='all'}" @click.stop='changeTab("all")'><span>全部</span></a>
        <a :class="{current_tab: isCurrent==='good'}" @click.stop='changeTab("good")'><span>精华</span></a>
        <a :class="{current_tab: isCurrent==='share'}" @click.stop='changeTab("share")'><span>分享</span></a>
        <a :class="{current_tab: isCurrent==='ask'}" @click.stop='changeTab("ask")'><span>问答</span></a>
        <a :class="{current_tab: isCurrent==='job'}" @click.stop='changeTab("job")'><span>招聘</span></a>
        <a :class="{current_tab: isCurrent==='dev'}" @click.stop='changeTab("dev")'><span>测试</span></a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import axios from 'axios';
export default {
  name: 'navbar',
  computed: {
    ...mapState([
      'isCurrent'
    ])
  },
  methods: {
    login () {
      if (!this.$store.state.user.isLoggin) {
        this.$router.push('/login')
      } else {
        this.$store.dispatch('displaySidebar')
      }
    },
    changeTab (tab) {
      this.$store.dispatch('isCurrent', tab)
      this.$store.dispatch('changeTopic', tab)
      this.$router.push(`/topics/${tab}`)

    }
  }
  // watch: {
  //   '$route' () {
  //       axios.get(`https://cnodejs.org/api/v1/topics?tab=${this.currentTab}&page=${this.page}&limit=${this.limit}`)
  //       .then((res) => {
  //         this.$store.dispatch('initData', res.data.data)
  //         // this.$store.dispatch('articleList', res.data)
  //       })
  //   }
  // }
}
</script>

<style lang="css" scoped>
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
  span.user-pic {
    display: inline-block;
    vertical-align: bottom;
    width: 15%;
  }
  span.add-topic {
    box-sizing: border-box;
    display: inline-block;
    width: 15%;
  }
  span.logo {
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
  div.tab a{
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #aaa;
    margin: 3px;
    padding: 2px 0;
    color: #333;
    text-decoration: none;
    font-size: 0.8em;
    flex: auto;
    text-align: center;
  }
  div.tab .current_tab {
    background-color: #80bd01;
  }
</style>
