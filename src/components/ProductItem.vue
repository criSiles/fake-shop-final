<template>
  <div class="product-item">
    <div class="product-info">
      <div class="product-name"><b>Product:</b> {{ product.title }}</div>
      <div class="product-description">{{ product.description }}</div>
      <div class="product-price"><b>Price:</b> {{ product.price }} €</div>
      <div class="product-avatar">
        <img :src="product.images[0]" alt="product image" />
      </div>
      <div class="product-category">
        <b>Product reference: </b> {{ product.id }}
      </div>
      <div class="product-avatar">
        <img :src="product.category.image" alt="product image" />
      </div>
      <div class="product-category">
        <b>Category:</b> {{ product.category.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from "@/models/product";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ProductItem",

  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>

<style scoped>
.product-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 1rem;
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
}

.product-name {
  font-size: 1.4rem;
  margin-bottom: 2rem;
  text-align: center;
}

.product-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.product-price {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.product-avatar {
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 20px;
}

.product-avatar img {
  width: 100%;
  height: 100%;
}

.product-category {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.product-item:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
