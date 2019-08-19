<template>
  <div id="app">

    <div class="content">
      <div class="header"> HERE IS A HEAD</div>

    </div>
    <div class="nav" @click="hideShowNavBar">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="content">
      <router-view />

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideShowNavBar() {
      debugger
      this.$message('submit!')
    }
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
@media (max-width: 920px) {
  .nav {
    transition: width 0.28s;
    width: 50px !important;
    background-image: linear-gradient(to bottom, #38bbf4 0%, #1992f2 100%);
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
  }

  .content {
    min-height: 100%;
    -webkit-transition: margin-left .28s;
    transition: margin-left .28s;
    margin-left: 110px;
    position: relative;
    padding-left: 20px;
  }
}
.nav {
  padding: 30px;
  border: solid 2px red
}
.content {
  min-height: 100%;
  -webkit-transition: margin-left .28s;
  transition: margin-left .28s;
  position: relative;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
.header {
  color: cyan;
  border: solid 2px black;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
