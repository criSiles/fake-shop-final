<template>
  <NavBar />
  <SearchProducts />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import SearchProducts from "@/components/SearchProducts.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
    SearchProducts,
  },
});
</script>
