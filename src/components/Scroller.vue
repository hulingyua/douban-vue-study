<template>
    <div class="scroller_container">
        <div class="list_title">
            <div class="fl">{{title}}</div>
            <a href="#" class="fr">更多</a>
        </div>
        <div class="list_container">
            <slot name='promItem'></slot>
            <template v-if="type == 'hasCover'">
                <ul class="list">
                    <template v-for="(item, index) in listArr">
                        <li class="list_item" :key="index">
                            <router-link to='subject'>
                                <img :src="item.images.small" alt="">
                                <p class="title">{{item.title}}</p>
                                <routing v-if='item.rating' :rating='item.rating'></routing>
                            </router-link>
                        </li>
                    </template>
                </ul>
            </template>
            <template v-else-if="type == 'onlyString'">
                <ul class="list_string">
                    <template v-for="(item, index) in listArr">
                        <li :key="index" :class="{br: item.line}">
                            <a href='item.href'>
                                <div :style="{color: item.color}">{{item.title}}</div>
                            </a>
                        </li>
                    </template>
                </ul>
            </template>
        </div>
        
    </div>
</template>

<script>
import Routing from './Routing'
export default {
    data() {
        return {

        }
    },
    props: ['title', 'listArr', 'type'],
    components: {
        Routing
    }
}
</script>

<style lang="scss" scoped>
    .list_title {
        height: 2.8rem;
        line-height: 2.8rem;
        padding-left: 1rem;
    }
    .fl {
        float: left;
    }
    .fr {
        float: right;
    }
    .list {
        overflow-x: auto;
        white-space: nowrap;
        .list_item {
            display: inline-block;
            width: 10rem;
        
            img {
                width: 8rem;
                height: 12rem;
            }
            .title {
                font-size: 1.2rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
            }
        }
    }
    .list_string {
        overflow-x: auto;
        white-space: nowrap;
        li {
            display: inline-block;
            margin: 0 0 0.8rem 1.6rem;
            font-size: 1.6rem;
            border: #FFAC2D solid 0.1rem;
            border-radius: 0.4rem;
            vertical-align: middle;
            padding: 15px;
            &.br {
                width: 100%;
                display: block;
                height: 0.1rem;
                border: 0; 
                padding: 0;
            }
        }

        li:empty {
            width: 100%;
            display: block;
            height: 0.1rem;
            border: 0;
            margin: 0;
        }
                
    }
</style>
