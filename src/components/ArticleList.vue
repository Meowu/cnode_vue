<template lang="html">
  <div class="article-list">
    <div class="article">
      <h5>饿了么Node进阶教程饿了么Node进阶教程饿了么Node进阶教程</h5>
      <div class="article-info">
        <a href="#" class="user-image"><img src="../assets/userpic.jpg" alt="userimage"></a>
        <p class="reply-time">
          <span class="author-name">author name</span><br />
          <span class="reply-name">Meowu</span><span>回复于</span><span>2小时前</span>
          <span><i class="fa fa-comment-o" aria-hidden="true"></i></span><span class="comments">4</span>
          <span class="topic">分享</span><br />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'article-list',
  mounted () {
    axios.get('https://cnodejs.org/api/v1/topics')
    .then((res) => {
      console.log(res.data.data[0].id);
    })
  }
}
</script>

<style lang="css">
  div.article-list {
    box-sizing: border-box;
    width: 100%;
    font-size: 0.9em;
  }
  div.article {
    padding: 10px;
    position: relative;
    border-bottom: 1px solid #ccc;
  }
  div.article-list h5 {
    margin-bottom: 5px;
  }
  a.user-image {
    display: inline-block;
    vertical-align: middle;
    width: 10%;
  }
  a.user-image img {
    border-radius: 50%;
    width: 100%;
  }
  div.article-info p{
    vertical-align: middle;
    display: inline-block;
  }
  div.article-info span {
    font-size: 0.8em;
    margin-right: 5px;
    color: #ccc;
  }
  i {color: #ccc;}
  div.article-info span.author-name {
    font-size: 1em;
    color: #000;
  }
  p.topic {
    float: right;
  }
  div.article-info span.topic {
    position: absolute;
    border: 1px solid #ccc;
    padding: 2px 6px;
    border-radius: 3px;
    background-color: #eee;
    right: 5px;
    bottom: 10px;
    color: #666;
  }
</style>
