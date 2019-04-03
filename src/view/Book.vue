<template>
    <div class="book_container">
        <scroller :title="'最受关注图书｜虚拟类'" type='hasCover' :listArr='novel'></scroller>
        <scroller :title="'最受关注图书｜非虚拟类'" type='hasCover' :listArr='reality'></scroller>
        <scroller title="豆瓣纸书" type="hasCover" :listArr="travel">
            <div class="promItem" slot="promItem">
                <img class="corver" src="../assets/book_zw.jpg" alt="">
                <div class="content">
                    <span class="price">¥ 68</span>
                    <span class="name">造物</span>
                    <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
                </div>
            </div>
        </scroller>
        <scroller :title="'发现好书'" type='onlyString' :listArr='bookTags'></scroller>
        <types></types>
        <downLoadApp></downLoadApp>
    </div>
</template>

<script>
import DownLoadApp from '../components/DownLoadApp'
import Scroller from '../components/Scroller'
import Types from '../components/Types'

import { mapState } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            novel: state => state.book.novel,
            reality: state => state.book.reality,
            travel: state => state.book.travel,
            bookTags: state => state.book.bookTags,
        })
    },
    created() {

    },
    components: {
        DownLoadApp,
        Scroller,
        Types
    }
}
</script>

<style lang='scss' scoped>
    .promItem {
        display: flex;
        padding-left: 1rem;
    }
    img {
        width: 10.2rem;
        height: 12rem;
    }
    .content {
        padding: 1.5rem;
    }
    .name {
        float: left;
        font-size: 2rem
    }
    .price {
        float: right;
        color: red;
        font-size: 2rem
    }
    .info {
        float: left;
        text-align: left;
    }
</style>
