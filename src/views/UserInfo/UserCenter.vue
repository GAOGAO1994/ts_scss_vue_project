<template>
    <div class="userCenter container">

        <div class="left-menu">

        </div>


        <div class="main-content">
            <router-view></router-view>

        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    @Component({
        name: "UserCenter"
    })

    export default class UserCenter extends Vue {

    }
</script>

<style scoped lang="scss">

</style>
