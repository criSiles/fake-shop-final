<template>
  <router-view />
  <FooterItem>
    <template #headerfooter>
      <p>FAKE SHOP FOR KEEPCODING</p>
    </template>
    <template #main-slot> <p>@2023</p></template>
    <template #footer>
      <a href="https://github.com/criSiles" class="fa fa-github" name="Github"
        >Github</a
      >
      <a
        href="https://www.linkedin.com/in/cristina-siles-vega/"
        class="fa fa-linkedin"
        name="Linkedin"
        >Linkedin</a
      >
    </template>
  </FooterItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterItem from "./components/FooterItem.vue";

export default defineComponent({
  name: "App",
  components: {
    FooterItem,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.fa {
  padding: 0.5rem;
  width: 2rem;
  text-align: center;
  text-decoration: none;
  margin: 3rem 1rem;
}

.fa:hover {
  opacity: 0.7;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}

.fa-github {
  background: black;
  color: white;
}
</style>
