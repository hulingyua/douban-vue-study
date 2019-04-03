<template>
    <div class="header_container">
        <h1>
            <router-link :to='{path: "/pages/home"}'>豆瓣-首页</router-link>
        </h1>
        <ul>
            <li><router-link :to="{name: 'movie'}">电影</router-link></li>
            <li><router-link :to="{name: 'book'}">图书</router-link></li>
            <li><router-link :to="{name: 'status'}">广播</router-link></li>
            <li><router-link :to="{name: 'group'}">小组</router-link></li>
        </ul>
        <span @click="showSearch">搜索</span>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        showSearch() {
            this.$emit('search');
        }
    }
}
</script>

<style scoped>
    .header_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    h1 {
        font-size: 16px;
    }
    ul {
        padding: 10px
    }
    li {
        float: left;
        margin-right: 10px;
    }
</style>
