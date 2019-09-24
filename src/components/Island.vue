<template>
  <div class="hello">
    <h3>{{ head }}</h3>
    <div>
      <img :src="imgSrc" alt="island image" />
    </div>
    <div>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Island',
  props: {
    head: String,
    text: String,
    imgSrc: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
