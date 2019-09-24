<template>
  <div class='home'>
    <img alt='WTM LOGO' src='https://15vjkf4cezxo5wuws1wy6yqr-wpengine.netdna-ssl.com/wp-content/uploads/Heart-Shaped.jpg' />
    <Wrapper msg='Welcome to WAY TO MALDIVES ISLANDS' />
    <Island v-for="item in islandInfo" :key="item.key" :head = "item.head" :text = "item.text" :imgSrc = "item.imgSrc" />
  </div>
</template>

<script>
// @ is an alias to /src
import Wrapper from '@/components/Wrapper.vue';
import Island from '@/components/Island.vue';
const islandInfo = [
  {
    key: 1,
    head: 'some island',
    text: 'some text',
    imgSrc: 'some imgSrc'
  },
  {
    key: 2,
    head: 'some island',
    text: 'some text',
    imgSrc: 'some imgSrc'
  }
]
export default {
  name: 'home',
  components: {
    Wrapper,
    Island
  },
  data() {
    return {
      islandInfo
    }
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  position: relative;
  overflow: hidden;
}
img {
  height: auto;
  width: 100%;
  max-width: 70vh;
  max-height: 40vh;
}
</style>
