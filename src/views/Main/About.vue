<template>
  <div class="about container">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({
    name: 'About'
  })
  export default class About extends Vue {

    // 可以在进入时关闭通知栏，也可以在首页离开前关闭，缺点是换作其他页面也要操作，会产生多余动作
    // 同时，要想操作此页面的生命周期必须引入Component！！！！！！

    // mounted() {
    //
    //     this.$store.dispatch('dashboard/showDashBoard', false);
    //     console.log('okok');
    //     //    在组件销毁前，标记此时离开了首页，头部导航的通知栏消失
    //
    // }

  }
</script>
<style scoped lang="scss">


</style>
