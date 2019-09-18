<template>
  <div id="app" :class="classObj">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <div class="content">
      <hamburger
        v-if="device === 'mobile'"
        id="hamburger-container"
        :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

      <div class="header">HERE IS A HEAD</div>
    </div>

    <div class="nav">
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
import { mapGetters } from 'vuex';
import ResizeMixin from './mixins/ResizeHandler.js';
import Hamburger from './components/Hamburger'

export default {
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar');
    },
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  },
  components: {
    Hamburger
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters(['sidebar', 'device']),
    classObj() {
      return {
        'un-hidden-nav': this.sidebar.opened && this.device === 'mobile',
        'hidden-nav': !this.sidebar.opened && this.device === 'mobile'
        // openSidebar: this.sidebar.opened,
        // withoutAnimation: this.sidebar.withoutAnimation,
        // mobile: this.device === 'mobile'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$sideBarWidth: 170px;
$hiddenSideBarWidth: 50px;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  transition: background .3s;
  -webkit-tap-highlight-color:transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
.hideNav {
  display: none;
}

.fontSizeNone {
  font-size: 0;
}

@media (max-width: 992px) {
  .un-hidden-nav {
    .nav {
      transition: width 0.28s;
      width: $sideBarWidth + 20px !important;
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
      margin: 10px 0 !important;
      display: block !important;
      border: solid 2px cyan !important;
    }

    .content {
      min-height: 100%;
      -webkit-transition: margin-left .28s;
      transition: margin-left .28s;
      margin-left: $sideBarWidth;
      position: relative;
      padding-left: 20px;
    }
  }
  .hidden-nav {
    .nav {
      transition: width 0.28s;
      width: $hiddenSideBarWidth + 20px !important;
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
      font-size: 0px;
    }

    .content {
      min-height: 100%;
      -webkit-transition: margin-left .28s;
      transition: margin-left .28s;
      margin-left: $hiddenSideBarWidth;
      position: relative;
      padding-left: 20px;
    }
  }
}
.nav {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-image: linear-gradient(to bottom, #00c4c3 0%, #04247b 100%);

  border: solid 2px red;
}
.content {
  min-height: 100%;
  -webkit-transition: margin-left .28s;
  transition: margin-left .28s;
  position: relative;
}

.nav a {
  border: none;
  cursor: pointer;
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
