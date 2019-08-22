<template>
  <div class='home'>
    <img alt='WTM LOGO' src='https://15vjkf4cezxo5wuws1wy6yqr-wpengine.netdna-ssl.com/wp-content/uploads/Heart-Shaped.jpg' />
    <Wrapper msg='Welcome to WAY TO MALDIVES ISLANDS' />
  </div>
</template>

<script>
// @ is an alias to /src
import Wrapper from '@/components/Wrapper.vue';

export default {
  name: 'home',
  components: {
    Wrapper
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