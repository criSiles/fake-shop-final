<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search"
      v-model="search"
      @keyup.enter="searchProducts"
    />
    <button @click="searchProducts">Search</button>
  </div>
  <PaginationItem
    :currentPage="currentPage"
    :totalPages="totalPages"
    @page-changed="onPageChanged"
  />
  <ul>
    <!-- For with routes to all the products -->
    <li v-for="product in productsPaginated" :key="product.id">
      <router-link :to="'/product/' + product.id">
        <div class="product-info">
          {{ product.title }}
          {{ product.price }}€
          <div style="padding: 0.2rem"></div>
          <img
            class="product-avatar"
            :src="product.images[0]"
            alt="product image"
          />
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import auth from "@/api/auth";
import { Product } from "@/models/product";
import PaginationItem from "./PaginationItem.vue";
import store from "@/store";

const PAGE_SIZE = 5;

export default defineComponent({
  name: "SearchBar",
  components: {
    PaginationItem,
  },
  data() {
    return {
      search: "",
      searched: false,
      currentPage: 1,
      productsSearched: [] as Product[],
    };
  },
  // Get the products from the store
  async created() {
    await store.dispatch("requestProducts");
  },
  methods: {
    searchProducts() {
      if (this.search.length < 3) {
        alert("Search must be at least 3 characters long");
        return;
      }
      auth.getListOfProducts(this.search).then((response) => {
        this.productsSearched = response.data;
        this.searched = true;
      });
    },
    onPageChanged(page: number) {
      console.log("Page changed to: " + page);
      this.currentPage = page;
    },
  },
  watch: {
    search() {
      if (this.search.length < 3) {
        this.searched = false;
      }
    },
  },
  computed: {
    products(): Product[] {
      return store.getters.getProducts;
    },
    productsPaginated(): Product[] {
      let myProducts: Product[] = this.searched
        ? this.productsSearched
        : this.products;
      return myProducts.slice(
        (this.currentPage - 1) * PAGE_SIZE,
        this.currentPage * PAGE_SIZE
      );
    },
    totalPages(): number {
      let myProducts: Product[] = this.searched
        ? this.productsSearched
        : this.products;
      return Math.floor(myProducts.length / PAGE_SIZE);
    },
  },
});
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
}

.search-bar input[type="text"] {
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 70%;
}

.search-bar button {
  width: 25%;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.search-bar div {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.search-bar div p {
  width: 30%;
  margin: 8px;
  padding: 14px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
}

.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.title {
  font-size: 2rem;
  margin: 1rem 0;
  text-align: center;
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
}

ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
li {
  width: auto;
  margin: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 1rem;
}
li:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.product-avatar {
  width: 15rem;
  height: auto;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
}
</style>
