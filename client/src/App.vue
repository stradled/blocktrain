<template>
  <div id="app">
    <navbar></navbar>
      <router-view/>
    <page-footer></page-footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import PageFooter from "./components/Footer";

export default {
  name: "App",
  components: { Navbar, PageFooter }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
