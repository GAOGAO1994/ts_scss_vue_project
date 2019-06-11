<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style lang="scss">
/**************
*     Theme
**************/
  @import "assets/theme/theme";
  @import "~element-ui/lib/theme-chalk/index.css";

  /****************
  *   Basic
  ***************/
  @import "assets/theme/common";



  /*****************
  *   Component
  ******************/
  @import "assets/theme/shadow";
 @import "assets/theme/section";
@import "assets/theme/responsive";
  @import "assets/theme/skeleton";

</style>
