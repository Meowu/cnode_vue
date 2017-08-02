<template lang="html">
  <div class="comments">
    <div class="comments" v-for='(reply, index) in topicDatas.replies'>
      <div class="header">
        <span class="author-url"><img :src="reply.author.avatar_url" alt=""></span>
        <span class="author-name">{{reply.author.loginname}}</span><span>#{{index}}</span>
        <span class="created-time">{{reply.create_at}}前回复</span>
      </div>
      <div class="comment-content" v-html='reply.content'></div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'comment',
  computed: {
    ...mapState({
      topicDatas: state => state.content.topic_content
    })
  }
}
</script>

<style lang="css">
</style>
