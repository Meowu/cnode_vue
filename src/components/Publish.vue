<template lang="html">
  <div class="publish">
    <span>选择主题：</span>
    <select class="tab-name" id="tab">
      <option value>请选择</option>
      <option value="ask">问答</option>
      <option value="share">分享</option>
      <option value="job">招聘</option>
      <option value="dev">测试</option>
    </select>
    <label for="title">标题：</label><input type="text" id="title" placeholder='标题10字数以上'>
    <textarea name="content" rows="8" id='content'></textarea>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
