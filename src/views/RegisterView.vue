<template>
  <div class="login">
    <h1 class="title">Registration</h1>
    <form action class="form" @submit.prevent="register">
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
        placeholder="Password"
      />

      <label class="form-label" for="#name">Name:</label>
      <input
        v-model="name"
        class="form-input"
        type="text"
        id="name"
        placeholder="Name"
      />

      <label class="form-label" for="#passwordRepeated"
        >Repeat the password:</label
      >

      <input
        v-model="passwordRepeated"
        class="form-input"
        type="password"
        id="passwordRepeated"
        placeholder="Password"
      />

      <p v-if="matchPassword" class="error">
        Passwords don't match, please rewrite them
      </p>
      <input class="form-submit" type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import auth from "@/api/auth.ts";

export default {
  data: () => ({
    email: "",
    password: "",
    passwordRepeated: "",
    avatar: "",
    name: "",
    matchPassword: false,
  }),

  methods: {
    async register() {
      console.log(this.email, this.password, this.passwordRepeated);
      try {
        if (this.password !== this.passwordRepeated) {
          this.matchPassword = true;
        } else {
          this.matchPassword = false;
        }

        if (this.matchPassword === false) {
          await auth
            .register(
              this.email,
              this.name,
              this.password,
              "t.ly/_9Nz",
              "customer"
            )
            .then((response) => {
              console.log(response);
            });
          alert("Registration completed, please log in");
          this.$router.push("/login");
        }
      } catch (error) {
        this.error = true;
        console.log(error);
      }

      this.email = "";
      this.password = "";
      this.name = "";
      this.passwordRepeated = "";
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
