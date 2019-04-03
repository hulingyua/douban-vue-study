<template>
  <div id="app">
    <router-view></router-view>
    <router-view name='search2'></router-view>
    <router-view name='subject'></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import router from './router/index.js'
import store from './store'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  router,
  store
}
</script>

<style>
html {
  font-size: 62.5%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
}

</style>
