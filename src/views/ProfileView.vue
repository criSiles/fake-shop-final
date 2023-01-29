<template>
  <NavBar />
  <div class="about">
    <UserItem :user="user" />
  </div>
</template>

<script lang="ts">
import UserItem from "@/components/UserItem.vue";
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import store from "@/store";
import { User } from "@/models/user";

export default defineComponent({
  name: "ProfileView",
  components: {
    UserItem,
    NavBar,
  },
  async created() {
    await store.dispatch("requestUser");
  },
  computed: {
    user(): User {
      return store.getters.getUser;
    },
  },
});
</script>
