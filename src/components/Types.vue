<template>
  <div class="type">
    <h2>分类浏览</h2>
    <ul class="list_box">
      <template v-for="(item, i) in cateList">
        <li :key="i" class="item">
            <a :href="'https://m.douban/' + item.href">{{item.title}}</a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cateList: [
        {
          title: "经典",
          href: "movie/classic"
        },
        {
          title: "冷门佳片",
          href: "movie/underrated"
        },
        {
          title: "豆瓣高分",
          href: "movie/doubantop"
        },
        {
          title: "动作",
          href: "movie/action"
        },
        {
          title: "喜剧",
          href: "movie/comedy"
        },
        {
          title: "爱情",
          href: "movie/love"
        },
        {
          title: "悬疑",
          href: "movie/mystery"
        },
        {
          title: "恐怖",
          href: "movie/horror"
        },
        {
          title: "科幻",
          href: "movie/scifi"
        },
        {
          title: "治愈",
          href: "movie/sweet"
        },
        {
          title: "文艺",
          href: "movie/artfilm"
        },
        {
          title: "成长",
          href: "movie/youth"
        },
        {
          title: "动画",
          href: "movie/animation"
        },
        {
          title: "华语",
          href: "movie/chinese"
        },
        {
          title: "欧美",
          href: "movie/western"
        },
        {
          title: "韩国",
          href: "movie/korean"
        },
        {
          title: "日本",
          href: "movie/japanese"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
    h2 {
      text-align: left;
    }
    .list_box {
        overflow: hidden;
        .item {
            width: 50%;
            float: left;
            height: 4rem;
            line-height: 4rem;
            border: 1px solid #eee;
            text-align: left;
            padding-left: 1rem;
            box-sizing: border-box;
            position: relative;
            a {
                color: #42bd56;
            }
            &::after {
                content: '';
                display: block;
                width: 0.5rem;
                height: 0.5rem;
                border-top: 1px solid #ccc;
                border-right: 1px solid #ccc;
                transform: rotate(45deg);
                position: absolute;
                right: 1rem;
                top: 1.6rem;;
            }
        }
    }
</style>
