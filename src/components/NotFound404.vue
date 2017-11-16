<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>404 Not Found!</h2>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
      msg: 'Sorry we could not find what you are looking for',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
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
  color: #35495E;
}
</style>
