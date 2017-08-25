<template>
  <div class="err">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>
<style lang="scss" scoped>
  .err {
    h1 {
      text-align: center;
      color: #fff;
    }
  }
</style>
