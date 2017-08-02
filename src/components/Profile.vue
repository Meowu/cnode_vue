<template lang="html">
  <div class="profile">
    <span class="avatar_url"><img :src="avatar_url" alt="avatar_url"></span>
    <span class="user_name"><label>用户名:</label>{{loginname}}</span>
    <span class="create-time"><label>创建时间:</label>{{create_at | formatTime}}</span>
    <span class="github"><label><i class="fa fa-github" aria-hidden="true"></i>:</label><a :href="githubLink+githubName">{{githubName}}</a></span>
    <span class="score"><label>Score:</label>{{score}}</span>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'Profile',
  data () {
    return {
      githubLink: "https://github.com/"
    }
  },
  computed: {
    ...mapState({
      loginname: state => state.user.loginname,
      avatar_url: state => state.user.avatar_url,
      githubName: state => state.user.githubUsername,
      score: state => state.user.score,
      create_at: state => state.user.create_at,
    })
  }
}
</script>

<style lang="css" scoped>
  div.profile {
    width: 100%;
    margin-top: 120px;
  }
  div.profile span{
    display: block;
    width: 80%;
    /*text-align: center;*/
    margin: 0 auto 20px;
    /*margin-bottom: 20px;*/
  }
  div.profile span label {
    /*变为块元素才可以设置大小然后右对齐！！！！*/
    display: inline-block;
    width: 100px;
    text-align: right;
    margin-right: 20px;
    font-size: 1.2em;
  }
  div.profile span a {
    text-decoration: none;
    color: #666;
  }
  div.profile span.avatar_url {
    text-align: center;
  }
  div.profile span.avatar_url img{
    border-radius: 10px;
    width: 150px;
    /*height: 100px;*/
  }
</style>
