<template>
  <div>
    <header class="header-slot">
      <slot name="headerfooter"></slot>
    </header>
    <main class="main-slot">
      <slot name="main-slot"></slot>
    </main>
    <footer class="footer-slot">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterItem",
};
</script>

<style scoped>
.header-slot {
  background-color: #f8f9fa;
  padding: 1px;
  text-align: center;
}

.main-slot {
  padding: 1px;
}

.footer-slot {
  background-color: #343a40;
  color: #fff;
  padding: 13px;
  text-align: center;
}
</style>
