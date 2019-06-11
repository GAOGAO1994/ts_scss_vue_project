<template>
  <div class="courses">
    <CarouselBlock :options="CarouselOptions" style="height: 400px"></CarouselBlock>
  </div>

</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {CarouselOptionsInterface} from "@/components/common/Carousel/Carousel.entity";
  @Component({
    name: 'Courses',
    components: {
      CarouselBlock: () => import(/* webpackChunkName: "group-carousel" */ '@/components/common/Carousel/CarouselBlock.vue'),
    }

  })
  export default class Courses extends Vue {
    public CarouselOptions: CarouselOptionsInterface = {
      src: [
        'img/backImg/01.jpg',
        'img/backImg/02.jpg',
        'img/backImg/03.jpg',
        'img/backImg/04.jpg',
      ],
      delayMS: 2000,
    }
  }
</script>

<style lang="scss">

</style>
