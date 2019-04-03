<template>
    <div class="page_container">
        <header-bar @search='open'></header-bar>
        <router-view></router-view>
        <search-view v-show="showSearch" @closeSearch='close'>我是搜索框</search-view>
        page
    </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar';
import SearchView from './SearchView';
export default {
    data() {
        return {
            showSearch: false
        }
    },
    components: {
        HeaderBar,
        SearchView
    },
    methods: {
        open() {
            this.showSearch = true
        },
        close() {
            this.showSearch = false
        }
    }
}
</script>

<style scoped>

</style>
