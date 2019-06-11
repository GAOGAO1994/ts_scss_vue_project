<template>
    <h1> ~_~ 运气很好找到这儿呢 ~<br><br>
        <div id="heart">
            <div class="before"></div>
            <div class="after"></div>
        </div>
        <router-link to="/" class="aa"> →_→ 戳我回首页啦！！</router-link>
        <!--<HorizontalScrollSkeleton></HorizontalScrollSkeleton>-->

    </h1>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    @Component({
        name:'EmptyRoute',
        components:{
            // DashDialog: ()　=> import('@/components/home/DashDialog/DashDialog.vue'),
            // NavBar : () => import('@/components/home/NavBar/NavBar.vue'),
            // HorizontalScrollSkeleton: () => import(/* webpackChunkName: "group-horizontal-scroll" */ '@/components/common/HorizonScroll/HorizontalScroll.skeleton.scss.vue')

        }
    })

    export default class EmptyRoute extends Vue{
        // name: "EmptyRoute"
    }
</script>

<style scoped lang="scss">

    .aa {
        padding: 50px;
        text-decoration: none;
        /*去除a标签下划线*/
        font-size: 1.5rem;
        transition: font-size 0.2s linear;
        &:hover{
            font-size: 2rem;
        }
    }
    @keyframes bs {
        0% {
            transform: scale(0.5);
        }
        50% {
            transform: scale(1);
        }
        100%{
            transform: scale(0.5);
        }
    }

    #heart{
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        animation: bs 1.5s infinite ease-in-out;
        /*&:before{}*/
        .before{
            position: absolute;
            content: "";
            left: 50px;
            top: 0;
            width: 50%;
            height: 80%;
            background: red;
            border-radius: 50px 50px 0 0;
            transform: rotate(-45deg);
            transform-origin: 0 100%;
        }
        .after{
            position: absolute;
            content: "";
            left: 15px;
            top: -35px;
            width: 50%;
            height: 80%;
            background: red;
            border-radius: 50px 50px 0 0;
            transform: rotate(45deg);
            transform-origin: 0 100%;
        }
    }



</style>
