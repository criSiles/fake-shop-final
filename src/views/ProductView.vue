<template>
  <NavBar />
  <div class="about">
    <ProductItem :product="product" />
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import ProductItem from "@/components/ProductItem.vue";
import { Product } from "@/models/product";
import store from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductView",
  components: {
    NavBar,
    ProductItem,
  },
  computed: {
    product(): Product {
      console.log(this.$router.currentRoute.value.params.id);
      return store.getters.getOneProduct(
        this.$router.currentRoute.value.params.id
      );
    },
  },
});
</script>
