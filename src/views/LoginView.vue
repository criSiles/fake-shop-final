<template>
  <div class="login">
    <h1 class="title">Login in the page</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#email">Email:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      />
      <label class="form-label" for="#password">Password:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        required
        placeholder="Password"
      />
      <p v-if="error" class="error">Wrong mail or password</p>
      <input class="form-submit" type="submit" value="Login" />
    </form>
    <p class="form">
      <label class="form-label" for="#password">Don't have an account?</label>
      <router-link class="form-submit" to="/register">Register</router-link>
    </p>
  </div>
</template>

<script>
import auth from "@/api/auth";
import store from "@/store";

export default {
  data: () => ({
    email: "",
    password: "",
    error: false,
  }),

  methods: {
    async login() {
      console.log(this.email, this.password);
      try {
        await auth.login(this.email, this.password).then((res) => {
          console.log("Token received:", res.data.access_token);
          auth.setToken(res.data.access_token);
          store.commit("setUser", res.data.user);
          store.dispatch("requestProducts");
          store.dispatch("requestUser");
        });
        console.log("Logged in");
        this.$router.push("/");
      } catch (error) {
        this.error = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>
