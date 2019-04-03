<template>
    <div class="group">
        <div class="title">{{title}}</div>
        <ul >
            <li v-for="(item, index) in items" :key='index'>
                <router-link :to='{name: "subject", params: { classify: item.subType ? item.subType : "book"}}' class="group-item">
                    <div class="group-meta">
                        <img v-if="item.images.small" :src="item.images.small" alt="">
                        <div class="grop-info">
                            <span>{{item.title}}</span>
                            <routing v-if="item.rating" :rating='item.rating'></routing>
                        </div>
                        <div v-if="item.group_member" class="group-member">{{item.group_member}}</div>
                    </div>
                    <div class="group-topic" v-if="item.group_topic">
                        <span>{{item.group_topic.name}}</span>
                        <span>{{item.group_topic.title}}</span>
                    </div>
                </router-link>
            </li>
        </ul>
        <slot name='more'></slot>
    </div>
</template>

<script>
import Routing from './Routing'
export default {
    data() {
        return {

        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    },
    computed: {

    },
    components: {
        Routing
    }
}
</script>

<style lang="scss" scoped>
.group {
    padding: 20px;
}
.title {
    text-align: left;
    font-size: 22px;
    margin-bottom: 10px;
}
.group-item {
    img {
        width: 50px;
        height: 80px;
        margin-right: 20px;
    }
}
.group-meta {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
}
</style>
