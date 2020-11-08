<template>
  <div id="app">
    <div id="bg"></div>
    <Header/>
    <router-view></router-view>
    <Footer msg="Made with ♥️ by Sadisha Nimsara"/>
  </div>
</template>

<script>
document.title = 'Corona Stats LK'

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
