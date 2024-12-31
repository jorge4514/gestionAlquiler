<template>
  <div id="app">
    <Header />
    <main>
      <Principal />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Principal from "./components/Principal.vue";

export default {
  name: "App",
  components: {
    Header,
    Principal,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

main {
  padding: 20px;
}
</style>
