<template lang="html">
  <div class="article-list">
    <div class="article" v-for='topic in topic_data'>
      <p class="title">{{ topic.title }}</p>
      <div class="article-info">
        <a href="#" class="user-image"><img :src="topic.author.avatar_url" alt="userimage"></a>
        <p class="reply-time">
          <span class="author-name">{{ topic.author.loginname}}</span><br />
          <span>最后回复于</span><span>{{topic.last_reply_at | format}}</span>
          <span><i class="fa fa-comment-o" aria-hidden="true"></i></span><span class="comments">{{topic.reply_count}}</span>
        </p>
        <span class="topic" v-show='topic.tab' :class="{top: topic.top}" >{{ topic.top? topic.top:topic.tab | tabName}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {mapState} from 'vuex';
import toast from '../common/utils/toast'

export default {
  name: 'article-list',
  data () {
    return {
      good: '精华',
      ask: '问答',
      share: '分享',
      job: '招聘',
      dev: '测试'
    }
  },
  computed: {
    ...mapState( {
      limit: state => state.articles.limit,
      page: state => state.articles.page,
      currentTab: state => state.articles.currentTab,
      topic_data: state => state.articles.topic_data,
    })
  },
  filters: {
    format (value) {
      let interval = Date.now() - Date.parse(value)
      if (interval / (1000*60*60*24*30*12) >= 1) {
        return `${parseInt(interval / (1000*60*60*24*30*12))}年前`
      } else if (interval / (1000*60*60*24*30) >= 1) {
        return `${parseInt(interval / (1000*60*60*24*30))}个月前`
      } else if (interval / (1000*60*60*24) >= 1) {
        return `${parseInt(interval / (1000*60*60*24))}天前`
      } else if (interval / (1000*60*60) >= 1) {
        return `${parseInt(interval / (1000*60*60))}小时前`
      } else if (interval / (1000*60) >= 1) {
        return `${parseInt(interval / (1000*60))}分钟前`
      }
    },
    tabName (value) {
      switch (value) {
        case 'ask':
          return '问答';
          break;
        case 'share':
          return '分享';
          break;
        case 'good':
          return '精华';
          break;
        case 'job':
          return '招聘';
          break;
        case 'dev':
          return '测试';
          break;
        default:
          return '置顶';
      }
    }
  },
  methods: {
    fetchData () {
        axios.get(`https://cnodejs.org/api/v1/topics?tab=${this.currentTab}&page=${this.page}&limit=${this.limit}`)
        .then((res) => {
          this.$store.dispatch('initData', res.data.data)
          // this.$store.dispatch('articleList', res.data)
        })
    }
  },
  created () {   // 方法和生命周期钩子中引用计算属性要加this
    this.fetchData()
  },
  watch: {
    '$route.params.tab' () {  //路由变化，重新渲染数据以便复用组件，不带this。
      this.fetchData()
      toast()
    }
  },
  mounted () {
    // toast()
  }
  // activated () {
  //   axios.get(`https://cnodejs.org/api/v1/topics?tab=${this.currentTab}&page=${this.page}&limit=${this.limit}`)
  //   .then((res) => {
  //     this.$store.dispatch('initData', res.data.data)
  //     // this.$store.dispatch('articleList', res.data)
  //   })
  // }
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
  div.article p.title {
    margin-bottom: 10px;
  }
  div.article-info a.user-image {
    display: inline-block;
    vertical-align: middle;
    width: 10%;
  }
  a.user-image img {
    border-radius: 50%;
    width: 100%;
  }
  p.reply-time {
    flex: 1 1 80%;
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
  div.article div.article-info span.top {
    background-color: #80bd01;
    color: #fff;
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
