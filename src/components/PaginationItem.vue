<template>
  <ul class="pagination">
    <li class="pagination-item">
      <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
        First
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        Previous
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li v-for="page in pages" :key="page.name" class="pagination-item">
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li class="pagination-item">
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
        Next
      </button>
    </li>

    <li class="pagination-item">
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
        Last
      </button>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PaginationItem",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      const pages = [];
      const startPage = this.currentPage - 2;
      const endPage = this.currentPage + 2;

      for (let i = startPage; i <= endPage; i++) {
        if (i >= 1 && i <= this.totalPages) {
          pages.push({
            name: i,
            isDisabled: this.isPageActive(i),
          });
        }
      }
      console.log("This.totalpages", this.totalPages);

      return pages;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit("page-changed", 1);
    },
    onClickPreviousPage() {
      this.$emit("page-changed", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("page-changed", page);
    },
    onClickNextPage() {
      this.$emit("page-changed", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("page-changed", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
});
</script>

<style>
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #4aae9b;
  color: #ffffff;
}
</style>
