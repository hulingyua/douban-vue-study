<template>
  <div class="search_container">
    <h1 class="h1">search</h1>
    <div @click="closeSearch">关闭</div>
    <input type="text" @keyup.enter="search" v-model.trim="inputText">
    <ul class="has-header">
      <li>
        <div>
          <a href="#" target="_blank">
            <strong style="color: rgb(35, 132, 232);">电影</strong>
            <span>影院热映</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(230, 70, 126);">同城</strong>
            <span>周末活动</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(159, 120, 96);">阅读</strong>
            <span>电子书</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(225, 100, 77);">东西</strong>
            <span>心爱之物</span>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href="#" target="_blank">
            <strong style="color: rgb(122, 106, 219);">电视</strong>
            <span>正在热播</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(42, 184, 204);">小组</strong>
            <span>志趣相投</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(87, 116, 197);">游戏</strong>
            <span>虚拟世界</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(64, 207, 169);">FM</strong>
            <span>红心歌单</span>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href="#" target="_blank">
            <strong style="color: rgb(159, 120, 96);">图书</strong>
            <span>畅销排行</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(244, 143, 46);">音乐</strong>
            <span>新碟榜</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(89, 108, 221);">应用</strong>
            <span>玩手机</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(66, 189, 86);">市集</strong>
            <span>购买原创</span>
          </a>
        </div>
      </li>
    </ul>
    <sub-nav mode='navBottom'></sub-nav>
  </div>
</template>

<script>
import SubNav from "../components/SubNav";
export default {
  data() {
    return {
      inputText: ""
    };
  },
  methods: {
    closeSearch() {
      this.$emit("closeSearch");
    },
    search() {
      console.log(this.inputText);
      this.$emit('closeSearch')
      this.$router.push({
        name: 'searchReasult',
        params: {
          search: this.inputText
        }
      })
    },
  },
  components: {
    SubNav
  }
};
</script>

<style scope>
.search_container {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
