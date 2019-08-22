<template>
  <div id="app">
    <div class="content">
      <div class="header">HERE IS A HEAD</div>
    </div>

    <div class="nav">
      <!--@click="toggleSideBar"-->
      <router-link to="/">Home</router-link>
      <router-link to="/islands">Islands</router-link>
      <router-link to="/about">About</router-link>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  // methods: {
  //   toggleSideBar() {
  //     this.$store.dispatch('app/toggleSideBar');
  //   }
  // },
  // computed: {
  //   ...mapGetters(['sidebar'])
  // }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
    width: 190px !important;
    background-image: linear-gradient(
      to right,
      #00c4c3 0%,
      #04244b 100%
    ) !important;

    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
  }

  .nav a {
    margin: 10px 0 !important ;
    display: block !important;
  }

  .content {
    min-height: 100%;
    -webkit-transition: margin-left .28s;
    transition: margin-left .28s;
    margin-left: 170px;
    position: relative;
    padding-left: 20px;
  }
}
.nav {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-image: linear-gradient(to bottom, #00c4c3 0%, #04247b 100%);

  border: solid 2px red
}
.content {
  min-height: 100%;
  -webkit-transition: margin-left .28s;
  transition: margin-left .28s;
  position: relative;
}

.nav a {
  margin-left: 20px;
  font-weight: bold;
  color: #f9a50c;
  text-decoration: none;
  display: inline-block;
}

.nav a.router-link-exact-active {
  color: #f9a50c;
}
.header {
  color: cyan;
  border: solid 2px black;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
</style>
