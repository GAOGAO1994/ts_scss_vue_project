<template>
<div id="carousel-block-wrapper">
  <div id="carousel-block-image-container">

    <div class="image-item" v-for="(item, index) in imageList" :key="`image-${index}`"
        :style="{width: `${width}px`}">

    </div>
  </div>
</div>
</template>

<script lang="ts">
  import CarouselBlock from './CarouselBlock.component';

  export default CarouselBlock;
</script>

<style scoped lang="scss">

</style>
