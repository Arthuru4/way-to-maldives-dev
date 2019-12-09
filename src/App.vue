<template>
  <div id="app" :class="classObj">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    ></div>
    <div class="content">
      <hamburger
        v-if="device === 'mobile'"
        id="hamburger-container"
        :is-active="sidebar.opened"
        class="hamburger-container"
        @toggleClick="toggleSideBar"
      />

      <div class="header"></div>
    </div>

    <div class="nav">
      <router-link to="/">
        <div class="link">
          <span v-if="device === 'mobile'">
            <svg-icon icon-class="star" />
          </span>
          Home
        </div>
      </router-link>
      <div class="hor-line" v-if="device === 'mobile'"></div>
      <router-link to="/islands">
        <div class="link">
          <span v-if="device === 'mobile'">
            <svg-icon icon-class="international" />
          </span>
          Islands
        </div>
      </router-link>
      <div class="hor-line" v-if="device === 'mobile'"></div>

      <router-link to="/about">
        <div class="link">
          <span v-if="device === 'mobile'">
            <svg-icon icon-class="message" />
          </span>
          About
        </div>
      </router-link>
      <div class="hor-line" v-if="device === 'mobile'"></div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ResizeMixin from './mixins/ResizeHandler.js';
import Hamburger from './components/Hamburger';

export default {
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar');
    },
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false });
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
      };
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
  color: #000000;
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
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;

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

.link {
  transition: box-shadow 0.3s;
  height: 100%;
  display: inline-block;
  padding: 10px;
  width: 100px;
  background-image: linear-gradient(to bottom, #00c4c3 0%, #04247b 100%);
  border-radius: 10px;
  box-shadow: inset 0 0 43px -7px rgba(0, 0, 0, 0.2);
}

@media (max-width: 992px) {
  .nav {
    .hor-line {
      border-top: 2px solid rgba(255,255,255,0.3);
    }
    border-radius: 0 !important;
  }

  .link {
    transition: box-shadow 0.3s;
    padding: 0 !important;
    width: 100%;
    height: 60px !important;
    background-image: unset;
    border-radius: unset;
    box-shadow: unset;
  }
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
      text-align: left;
      display: block !important;
    }

    .nav a span {
      line-height: 3.5em;
      padding: 10px;
    }

    .content {
      min-height: 100%;
      -webkit-transition: margin-left 0.28s;
      transition: margin-left 0.28s;
      margin-left: $sideBarWidth;
      position: relative;
      padding-left: 20px;
    }
  }
  .hidden-nav {
    .nav a.router-link-exact-active .line {
      box-shadow: unset;
    }

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
      font-size: 0;
      margin-left: 0;
      display: block !important;
      span {
        line-height: 3em;
        color: #ffffff;
        font-size: 20px;
      }
    }

    .content {
      min-height: 100%;
      -webkit-transition: margin-left 0.28s;
      transition: margin-left 0.28s;
      margin-left: $hiddenSideBarWidth;
      position: relative;
      padding-left: 20px;
    }
  }
}
.nav {
  width: 100%;
  box-sizing: border-box;
  background-image: linear-gradient(to bottom, #00c4c3 0%, #04247b 100%);

  border-radius: 5px;
}
.content {
  min-height: 100%;
  -webkit-transition: margin-left 0.28s;
  transition: margin-left 0.28s;
  position: relative;
}

.nav a {
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  display: inline-block;
}

.nav a.router-link-exact-active {
  color: #ffffff;
}
.nav a.router-link-exact-active .link {
  box-shadow: inset 0 0 43px -7px rgba(0, 255, 0, 0.2);
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
