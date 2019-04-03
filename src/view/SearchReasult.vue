<template>
    <div class="search_reasult_container">
        <div class="search">
            <form action="" class="search_form">
                <input type="text" 
                    v-model.trim.lazy='queryStr'
                    placeholder="搜索 书 / 影 / 音 / 标签"
                    @keyup.enter='query(1)'
                >
                <button @click="query(1)">搜索</button>
            </form>
        </div>
        <div class="search_reasult">
            <group title="影视" v-if="queryRes_movie.length > 0" :items='queryRes_movie'>
                <div  @click="query('more')" slot="more">查看更多影视结果</div>
            </group>
            <group title="图片" v-if="queryRes_movie.length > 0" :items='queryRes_movie'>
                <div  @click="query('more')" slot="more">查看更多图片结果</div>
            </group>
            <group title="音乐" v-if="queryRes_movie.length > 0" :items='queryRes_movie'>
                <div  @click="query('more')" slot="more">查看更多音乐结果</div>
            </group>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Group from "../components/Group";
export default {
    data() {
        return {
            queryStr: ''
        }
    },
    methods: {
        query(e) {
            // 加载更多时
            if(e == 'more') {
                this.$store.commit('getMore')
            }
            if(e == 1) {
                this.$store.commit('initCount')
            }
            // 判断是否含有emoji表情等特殊符号
            // let hasEmoji = this.queryStr.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");
            // console.log(hasEmoji)
            // return
            this.$store.dispatch({
                type: 'query',
                tag: 'movie',
                queryStr: this.queryStr
            })
        }
    },
    computed: {
        ...mapState({
            queryRes_movie: state => state.search.queryRes_movie,
            count: state => state.search.count
        })
    },
    created() {
        let queryStr = this.$route.params.search;
        console.log(queryStr)
        if(!!queryStr) {
            this.queryStr = queryStr
            this.query()
        }
    },
    components: {
        Group
    }
}
</script>

<style lang="scss" scoped>
    .search_reasult {
        // background-color: bisque;
        text-align: left;
        a {
            color: green;
        }
    }
</style>
