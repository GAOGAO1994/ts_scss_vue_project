<template>
    <div class="main">
        <NavBar>
            <div class="nav-wrapper">
                <div class="container">
                    <router-link class="nav-link no-underline top-line" exact-active-class="link-active" to="/">首页</router-link>
                    <router-link class="nav-link no-underline top-line" active-class="link-active" to="/course" >课程</router-link>
                    <router-link class="nav-link no-underline top-line" active-class="link-active" to="/blog">讲课</router-link>
                    <router-link class="nav-link no-underline top-line" active-class="link-active" to="/blog">学课</router-link>
                    <router-link class="nav-link no-underline top-line" active-class="link-active" to="/blog">软件</router-link>
                    <router-link class="nav-link no-underline top-line" active-class="link-active" to="/about">解决方案</router-link>
                </div>
            </div>
        </NavBar>

        <router-view></router-view>

        <div class="footer-wrapper">
            <myFooter></myFooter>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component,Vue} from 'vue-property-decorator';
    // @Component 修饰符注明了此类为一个 Vue 组件
    @Component({
        components:{
            NavBar : () => import(/* webpackChunkName: "group-home" */ '@/components/home/NavBar/NavBar.vue'),
            myFooter: () => import(/* webpackChunkName: "group-home" */ '@/components/home/Footer/myFooter.vue')
        }
    })

    export default class Main extends Vue{
        // name: "Main"
        constructor(){
            super();
        }



    }
</script>

<style scoped lang="scss">
    @import "../../assets/theme/theme";

    .main {
        position: relative;
        min-height: 100vh;
        padding-bottom: $footerHeight;
        .footer-wrapper {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
        }
    }

    .nav-wrapper {
        background: $darkBg;
        .container {
            white-space: nowrap;
            .nav-link {
                display: inline-block;
                height: $navHeight;
                line-height: $navHeight;
                padding: 0 1rem;
                font-size: $font-size-md;
                font-weight: 400;
                color: white;
                text-decoration: none;
                &.link-active {
                    background: #464E5D;
                    &:before {
                        transform: none;
                    }
                }
            }
        }
    }
</style>
