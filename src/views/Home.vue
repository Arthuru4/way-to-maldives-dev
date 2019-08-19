<template>
  <div class="home">
    <img alt="WTM LOGO" src="https://15vjkf4cezxo5wuws1wy6yqr-wpengine.netdna-ssl.com/wp-content/uploads/Heart-Shaped.jpg" />
    <Base msg="Welcome to WAY TO MALDIVES START PAGE" />
  </div>
</template>

<script>
// @ is an alias to /src
import Base from "@/components/Base.vue";

export default {
  name: "home",
  components: {
    Base
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