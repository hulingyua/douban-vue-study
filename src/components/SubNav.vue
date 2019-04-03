<template>
    <div class="sub_nav">
        <ul v-if='mode == "navBottom"' class="container">
            <li><router-link :to='{ name: "register" }'>注册账号</router-link></li>
            <template v-if='currentUser.email'>
                <li @click="logout()">退出登录</li>
            </template>
            <template v-else>
                <li><router-link :to='{ name: "login" }'>登录豆瓣</router-link></li>
            </template>
            <li><a href="https://movie.douban.com/">使用桌面版</a></li>
            <li><a href="#">使用APP</a></li>
        </ul>
        <ul v-else-if="mode == 'navQuick'" class="container">
            <li><router-link :to='{name : ""}'>影院热映</router-link></li>
            <li><router-link :to='{name : ""}'>欧美新碟</router-link></li>
            <li><router-link :to='{name : ""}'>注册账号</router-link></li>
            <template v-if='currentUser.email'>
                <li @click="logout()">退出登录</li>
            </template>
            <template v-else>
                <li><router-link :to='{ name: "login" }'>登录豆瓣</router-link></li>
            </template>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            
        }
    },
    props:['mode'],
    computed: {
        ...mapGetters([
            'currentUser'
        ])
    }
}
</script>

<style scoped>
    .container {
        list-style: none;
    }
    .container li {
        list-style: none;
        float: left;
        margin-right: 10px;
        font-size: 16px;
    }
</style>
