<template>
  <NavBar />
  <SearchBar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
    SearchBar,
  },
});
</script>
