<template lang="html">
  <div class="login">
    <label for="token">Token:</label><br />
    <input type="text" ref='token' id="token" placeholder='请输入accessToken'>
    <button type="button" id="btn">登录</button>
    <p>如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的accessToken。</p>
  </div>
</template>

<script>
export default {
  name: 'login',
}
</script>

<style lang="css" scoped>
  .login {
    height: 100%;
    margin-top: 40%;
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
    height: 25px;
    outline: none;
    width: 90%;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
    background-color: #eee;
    margin-bottom: 10px;
  }
  #token:focus {
    border: 1px solid #919191;
  }
</style>
