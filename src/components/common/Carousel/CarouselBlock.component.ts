import {Component, Prop, Vue} from "vue-property-decorator";
import {CarouselOptionsInterface, DefaultCarouselOptionsEntity} from "@/components/common/Carousel/Carousel.entity";

@Component({
  name:'Carousel',
  computed: {
    // realOptions() {
    //   return Object.assign(new ())
    // }
  }
})

export default class Carousel extends Vue {
//  Configuration
  @Prop({required: true, default: null}) options: CarouselOptionsInterface;
  public realOptions: CarouselOptionsInterface;

//  Page Status

}
