<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          <img src="../assets/logo.png" alt="logo" />
        </router-link>
      </li>
    </ul>

    <ul>
      <li>
        <router-link to="/home">Products</router-link>
      </li>
      <li>
        <router-link to="/profile">Profile</router-link>
      </li>
    </ul>

    <button @click="logout">Logout</button>
  </nav>
</template>

<script lang="ts">
import auth from "@/api/auth";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",

  computed: {
    hasToken() {
      return auth.getToken() !== null;
    },
  },

  methods: {
    login() {
      console.log("Login, go to the home page");
      this.$router.push("/");
    },
    logout() {
      console.log("Logout, going to the login page");
      auth.logout();
      this.$router.push("/login");
    },
  },
});
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

li {
  margin-right: 10px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2c3e50;
}

button:active {
  background-color: #2c3e50;
}

button:focus {
  outline: none;
}

img {
  width: 100px;
}
</style>
