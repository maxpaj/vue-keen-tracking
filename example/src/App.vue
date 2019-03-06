<template>
  <div id="app">
    <h1>Test store</h1>
    <button @click="increment">Increment</button>
    {{ incremented }}
    <h1>Test router</h1>
    <ul>
      <li>
        <router-link to="page1">Page 1</router-link>
      </li>
      <li>
        <router-link to="page2">Page 2</router-link>
      </li>
    </ul>
    {{ $route.path }}
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "app",
  methods: {
    ...mapActions(["increment"])
  },
  computed: {
    ...mapGetters(["incremented"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
