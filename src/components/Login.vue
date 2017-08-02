<template lang="html">
  <div class="login">
    <label for="token">Token:</label><br />
    <input type="text" v-model.trim='token' id="token" placeholder='请输入accessToken'>
    <button type="button" id="btn" @click='login'>登录</button>
    <p>「用户登录后，在设置页面可以看到自己的accessToken。」</p>
    <p ref='alert' class='alert'></p>
  </div>
</template>

<script>
import axios from 'axios';
import toast from '../common/utils/toast'

export default {
  name: 'login',
  data () {
    return {
      token: '',
    }
  },
  mounted () {

  },
  methods: {
    login () {
      if (!this.token.length) {
        this.$refs.alert.textContent = '请输入正确的token。'
        setTimeout(() => {
          this.$refs.alert.textContent = ''
        }, 1000)
        return
      }
      console.log(this.token);
      axios.post('https://cnodejs.org/api/v1/accesstoken', {accesstoken: this.token})
      .then(res => {
        localStorage.setItem('user_id', res.data.id)
        localStorage.setItem('loginname', res.data.loginname)
        localStorage.setItem('avatar_url', res.data.avatar_url)
        toast()
        this.$router.push('/')
      })
      .catch(err => {
        console.log(err)
        this.$refs.alert.textContent = '登录失败，请检查token是否正确。'
        setTimeout(() => {
          this.$refs.alert.textContent = ''
        }, 2000)
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .login {
    /*height: 100%;*/
    margin-top: 100px;
    padding: 0 20px;
    /*background-color: #4cebb8;*/
  }
  /*不能设置上下内、外边距，可以设置左右边距*/
  label {
    /*display：block会出现很大的下边距*/
    display: inline-block;
    padding-bottom: 5px;
  }
  #token {
    height: 35px;
    outline: none;
    width: 95%;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
    background-color: rgba(#999, 0.8);
    margin-bottom: 10px;
    box-shadow: inset -1px -1px #ddd, inset 1px 1px #ddd;
  }
  #token:focus {
    border: 1px solid #b5eef5;
  }
  #btn {
    margin-left: 70%;
    width: 60px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ddd;
    background-color: #eee;
    outline: none;
    margin-bottom: 5px;
  }
  p.alert {
    text-align: center;
    color: #e6824b;
    margin-top: 10px;
  }
</style>
