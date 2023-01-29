<template>
  <div class="user-item">
    <div class="user-avatar">
      <img :src="user.avatar" :alt="user.name" />
    </div>
    <div class="user-info">
      <div class="user-name">{{ user.name }}</div>
      <div class="user-email">{{ user.email }}</div>
      <div class="user-email">{{ user.createdAt }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { User } from "@/models/user";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "UserItem",

  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
});
</script>

<style scoped>
.user-item {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.user-avatar {
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 20px;
}

.user-avatar img {
  width: 100%;
  height: 100%;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.user-email {
  font-size: 18px;
  color: gray;
}
</style>
