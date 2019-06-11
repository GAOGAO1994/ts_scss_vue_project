<template>
    <div class="home">
        <Banner :options="BannerOptions">
            <div class="container word-typing">
                <div class="typing-header">Let's buy and study now!</div>
                <WordTyping :options="WordTypingOptions"></WordTyping>
            </div>
        </Banner>

        <FeatureBar></FeatureBar>

        <div class="section-wrapper">
            <div class="section container">
                <h1>兴趣推荐</h1>
                <transition name="skeleton" mode="out-in">
                    <HorizontalScroll :items="HorizontalScrollItems" v-if="HorizontalItemsReady"
                                      key="Popularity" @scrollEnd="handlerScrollEnd"></HorizontalScroll>
                    <HorizontalScrollSkeleton v-else key="Popularity-skeleton"></HorizontalScrollSkeleton>
                </transition>
            </div>
        </div>

        <div class="section-wrapper">
            <div class="section container">
                <h1>最新课程</h1>
                <transition name="skeleton" mode="out-in">
                    <HorizontalScroll :items="HorizontalScrollItems" v-if="HorizontalItemsReady"
                                      key="Popularity" @scrollEnd="handlerScrollEnd"></HorizontalScroll>
                    <HorizontalScrollSkeleton v-else key="Popularity-skeleton"></HorizontalScrollSkeleton>
                </transition>
            </div>
        </div>

        <div class="section-wrapper">
            <div class="section container">
                <h1>畅销课程</h1>
                <transition name="skeleton" mode="out-in">
                    <HorizontalScroll :items="HorizontalScrollItems" v-if="HorizontalItemsReady"
                                      key="Popularity" @scrollEnd="handlerScrollEnd"></HorizontalScroll>
                    <HorizontalScrollSkeleton v-else key="Popularity-skeleton.scss"></HorizontalScrollSkeleton>
                </transition>
            </div>
        </div>

        <div class="section-wrapper">
            <div class="section container">
                <h1>评价最高</h1>
                <transition name="skeleton" mode="out-in">
                    <HorizontalScroll :items="HorizontalScrollItems" v-if="HorizontalItemsReady"
                                      key="Popularity" @scrollEnd="handlerScrollEnd"></HorizontalScroll>
                    <HorizontalScrollSkeleton v-else key="Popularity-skeleton"></HorizontalScrollSkeleton>
                </transition>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {HorizontalScrollEntityInterface} from "@/components/common/HorizonScroll/HorizontalScroll.entity";
    import {BannerOptionsInterface} from "@/components/home/Banner/Banner.entity";
    import {WordTypingOptionsInterface} from "@/components/common/WordTyping/WordTyping.entity"

    @Component({
        name: "Home",
        components:{
            Banner: () => import(/* webpackChunkName: "group-home" */ '@/components/home/Banner/Banner.vue'),
            FeatureBar: () => import(/* webpackChunkName: "group-home" */ '@/components/home/FeatureBar/FeatureBar.vue'),
            HorizontalScroll: () => import(/* webpackChunkName: "group-horizontal-scroll" */ '@/components/common/HorizonScroll/HorizontalScroll.vue'),
            HorizontalScrollSkeleton: () => import(/* webpackChunkName: "group-horizontal-scroll" */ '@/components/common/HorizonScroll/HorizontalScroll.skeleton.vue'),
            WordTyping: () => import(/* webpackChunkName: "group-word-typing" */ '@/components/common/WordTyping/WordTyping.vue'),
        }
    })



    export default class Home extends Vue {

        public BannerOptions: BannerOptionsInterface = {
          backgroundImage: 'img/index/banner.jpg',
        };

        public WordTypingOptions: WordTypingOptionsInterface = {
            delay: 150,
            theme: 'light',
            fontSize: '2rem',
            items: [
                {
                    text: 'Login',
                    link: '/',
                },
                {
                    text: 'Sign up Now',
                    link: '/blog',
                }
            ]
        };

        public HorizontalItemsReady: boolean = false;
        public HorizontalScrollItems: Array<HorizontalScrollEntityInterface> = [
            {
                image: 'img/kecheng/1.png',
                title: '疯狂Java',
                content: '《疯狂Java讲义》深入介绍了Java编程的相关方面，全书内容覆盖了Java的基本语法结构、Java的面向对象特征、Java集合框架体系、Java泛型、异常处理、Java GUI编程、JDBC数据库编程、Java注释、Java的IO流体系、Java多线程编程、Java网络通信编程和Java反射机制。',
                link: '/course/detail/1',
            }, {
                image: 'img/kecheng/2.png',
                title: 'JavaScript高级程序设计',
                content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                link: '/course/detail/1',
            }, {
                image: 'img/kecheng/3.png',
                title: 'CSS宝库',
                content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                link: '/',
            }, {
                image: 'img/kecheng/4.png',
                title: 'Learning TypeScript',
                content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
                link: '/',
            }, {
                image: 'img/kecheng/5.png',
                title: 'MySQL必知必会',
                content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                link: '/',
            }, {
                image: 'img/kecheng/6.png',
                title: 'Nodejs由浅入深',
                content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                link: '/',
            }, {
                image: 'img/kecheng/7.png',
                title: '123',
                content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                link: '/',
            }, {
                image: 'img/kecheng/8.png',
                title: '123',
                content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                link: '/',
            }, {
                image: 'img/kecheng/9.png',
                title: '123',
                content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                link: '/',
            }, {
                image: 'img/kecheng/1.png',
                title: '123',
                content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                link: '/',
            }, {
                image: 'img/kecheng/2.png',
                title: '123',
                content: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                link: '/',
            },
        ];

        constructor() {
            super();
        }

        mounted(){
            setTimeout(() => {
                this.HorizontalItemsReady = true;
            }, 2000);

            this.$store.dispatch('dashboard/showDashBoard', true);
        //    确定此时在首页Home界面
        };

        // 可以在离开前关闭通知栏，也可以在进入其他页面时关闭，都行，只不过在此处关闭可以减少多余的操作
        beforeDestroy() {
            this.$store.dispatch('dashboard/showDashBoard', false);
        //    在组件销毁前，标记此时离开了首页，头部导航的通知栏消失
        };

        public handlerScrollEnd(count: number) {
            console.log(count);
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/theme/theme";

    .word-typing {
        padding-top: 4rem;
        .typing-header {
            font-size: 3rem;
            line-height: 1.5;
            font-weight: bold;
        }
    }

    h1 {
        margin: 0;
        padding-bottom: 1rem;
    }

</style>
