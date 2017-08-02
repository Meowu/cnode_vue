<template lang="html">
  <div class="bottom-bar">
    <span @click='backward'><i class="fa fa-arrow-left" aria-hidden="true"></i></span>
    <span @click='backTop'><i class="fa fa-arrow-up" aria-hidden="true"></i></span>
    <span @click='mark'><i class="fa fa-bookmark-o" aria-hidden="true"></i></span>
    <span><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
  </div>
</template>

<script>
export default {
  name: 'bottom-bar',
  methods: {
    backward () {
      this.$router.go(-1)
      this.$store.dispatch('isContent', false)

      window.scrollTo()
    },
    backTop () {
      window.scrollTo(0, 0)
    },
    mark () {
      // this.$router.go(0)
      window.location.reload()
    }
  }
}
</script>

<style lang="css" scoped>
  .bottom-bar {
    box-sizing: border-box;
    border: 1px solid #999;
    position: fixed;
    background-color: #eee;
    bottom: 0;
    display: flex;
    width: 100%;
    text-align: center;
    box-shadow: 0 -1px 3px #888;
  }
  .bottom-bar span {
    vertical-align: top;
    font-size: 1.2em;
    padding: 10px 20px;
    flex: 1 1 auto;
    /*width: 33.333%;*/
  }
  .bottom-bar i {
    color: #2d2a2a;
    font-weight: 200;
  }
</style>
