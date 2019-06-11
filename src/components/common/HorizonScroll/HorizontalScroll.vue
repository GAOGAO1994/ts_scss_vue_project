<template>
  <div class="horizontal-scroll">

    <section class="list-wrapper">
      <div class="card-list" :style="{transform: `translate(-${offsetLeft}px,0)`}">
        <div class="col-6 col-md-3 col-lg-2 card-wrapper" v-for="(item, index) in items" :key="index">
          <el-popover placement="right" width="250" trigger="hover" :open-delay="300">
            <div class="card elevation-2 shadow-6" slot="reference">
              <!--slot="reference"，内置插槽，触发消息框的HTML内容-->
              <router-link class="no-underline" :to="item.link || '/'">
                <img :src="item.image| FilePathParser">
                <!--图片路径使用过滤器！！！-->
                <div class="text">
                  <div class="ellipsis title" :title="item.title">{{item.title}}</div>
                  <div class="ellipsis content" :title="item.content">{{item.content}}</div>
                  <div class="button-group">
                    <el-button type="primary" size="small">立即购买</el-button>
                  </div>
                </div>

              </router-link>
            </div>

            <div class="popover-wrapper">
              <div class="text">
                <div class="title">{{item.title}}</div>
                <div class="content"><span>{{item.content}}</span></div>
              </div>
            </div>

          </el-popover>
        </div>
      </div>
    </section>

    <section content="actions">
      <div class="arrow left" v-show="currentIndex" @click="scrollClickHandler($event,currentIndex - 1)"></div>
      <div class="arrow right" v-show="currentIndex < trailingIndex" @click="scrollClickHandler($event,currentIndex + 1)"></div>
    </section>
  </div>

</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import {HorizontalScrollEntityInterface,} from "./HorizontalScroll.entity";

  @Component({
    name: 'HorizontalScroll',

  })
  export default class HorizontalScroll extends Vue {
    @Prop({required: true, type: Array}) items: Array<HorizontalScrollEntityInterface>;

    public currentIndex: number = 0;
    public trailingIndex: number = 0;
    public offsetLeft: number = 0;

    private _resizeListener: EventListener; // ?????????

    constructor() {
      super();
    }

    mounted() {
      // 监听页面变化，当页面的可视宽度变化时，回到初始设置
      this._resizeListener = (evt:Event): void => {
        this._initWrapper()._resetOffestLeft();
      };
      // 在页面载入后，初始化几个位移变量
      this._initWrapper()._resetOffestLeft();
      // 给Windows添加resize的事件监听
      window.addEventListener('resize', this._resizeListener);
    }

    // 离开时再次初始化
    beforeDestroy() {
      window.removeEventListener('resize', this._resizeListener);
    }

    public scrollClickHandler(event: MouseEvent, index: number) {
      this.offsetLeft = ((event.target as Node).parentNode.previousSibling.firstChild.childNodes[index] as HTMLElement).offsetLeft;
      console.log(this.offsetLeft);
      if(index >= 0 && index <= this.trailingIndex) {
        this.currentIndex = index;
        if (index === this.trailingIndex){
          this.$emit('scrollEnd', this.items.length);
        }
      }
      return this;
    }

    private  _resetOffestLeft() {
      this.currentIndex = 0;
      this.offsetLeft = 0;
      return this;
    }

    private _initWrapper() {
      const windowWidth: number = window.innerWidth;
      let showCount: number;
      if (windowWidth >= 1366) {
        showCount = 6 ;
      } else if (windowWidth <1366 && windowWidth >= 768) {
        showCount = 4;
      } else {
        showCount = 2;
      }
      this.trailingIndex = this.items.length - showCount;
      return this;
    }

  }
</script>

<style scoped lang="scss">
  @import "../../../assets/theme/theme";
  @import "./HoriziontalScroll";

  .horizontal-scroll{
    position: relative;
  }

  .arrow {
    position: absolute;
    top: 50%;
    height: 3rem;
    width: 3rem;
    transform: translate(0, -50%);
    background-color: $HorizonBackground;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .3), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
    transition: box-shadow .3s linear;
    &:before {
      content: '';
      position: absolute;
      top: .75rem;
      border: .75rem solid transparent;
      border-radius: .5rem;
      transition: border .3s linear;
    }
    &:after {
      content: '';
      position: absolute;
      z-index: 1;
      top: .75rem;
      border: .75rem solid transparent;
    }
    &:after {
      content: '';
      position: absolute;
      z-index: 1;
      top: .75rem;
      border: .75rem solid transparent;
    }
    &.left {
      left: -1rem;
      &:before {
        left: .325rem;
        border-right-color: $secondary;
      }
      &:after {
        left: .625rem;
        border-right-color: $HorizonBackground;
      }
    }
    &.right {
      right: -1rem;
      &:before {
        right: .325rem;
        border-left-color: $secondary;
      }
      &:after {
        right: .625rem;
        border-left-color: $HorizonBackground;
      }
    }
    &:hover {
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0,0,0,.12);
      &.left:before {
        border-right-color: $primary;
      }
      &.right:before {
        border-left-color: $primary;
      }
    }
  }


</style>
