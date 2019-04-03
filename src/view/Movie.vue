<template>
    <div class="movie_container">
        <scroller title="影院热映" :listArr='hotMovies' type='hasCover'></scroller>
        <scroller title="免费在线观影" :listArr='topMovies' type='hasCover'></scroller>
        <scroller title="新片速递" :listArr='newMovies' type='hasCover'></scroller>
        <scroller title="发现好电影" :listArr='movieTags' type='onlyString'></scroller>
        <types></types>
        <downLoadApp></downLoadApp>
    </div>
</template>

<script>
import Scroller from '../components/Scroller';
import Types from '../components/Types';
import DownLoadApp from '../components/DownLoadApp';
import { mapState } from 'vuex'

export default {
    data() {
        return {

        }
    },
    components: {
        Scroller, 
        Types,
        DownLoadApp
    },
    computed: {
        ...mapState({
            hotMovies: state => state.movie.hotMovies,
            topMovies: state => state.movie.topMovies,
            newMovies: state => state.movie.newMovies,
            movieTags: state => state.movie.movieTags,
        })
    },
    created() {
        this.$store.dispatch('getMovies')
    }
}
</script>

<style scoped>

</style>
