<template>
  <div class="login-Container">
    <div v-if="!LoggedIn">
      <button class="Button">
        <p>Sign up</p>
      </button>
      <form @submit.prevent="Login">
        <button class="Button" type="submit">
          <p>Login</p>
        </button>
        <span class="login-Forum">
          <span class="input-Name">Username</span>
          <input class="input-Form" v-model="Username" />
        </span>
        <span class="login-Forum">
          <span class="input-Name">Password</span>
          <input class="input-Form" v-model="Password" type="password" />
        </span>
      </form>
    </div>
    <div v-else>
      <button class="Button" v-on:click="SignOut()">
        <p>Sign Out</p>
      </button>
    </div>
  </div>
</template>
<script>
import { RepositoryFactory } from "../repositories/RepositoryFactory";
const PlayerRepository = RepositoryFactory.get("Players");
export default {
  name: "Login",
  props: {
    LoggedIn: Boolean
  },
  data() {
    return {
      Username: "",
      Password: "",
    };
  },
  methods: {
    async Login() {
      let loginData = { username: this.Username, password: this.Password };
      await PlayerRepository.Login(loginData).then(response => {
        if (!response) {
          console.log("wrong password");
        } else {
          const parsed = JSON.stringify(response);
          localStorage.User = parsed;
          this.$emit('Login', true, response.id);
        }
      });
    },
    SignOut() {
      localStorage.removeItem("User");
      this.$emit('Login', false, undefined);
    }
  }
};
</script>

<style>
.Button {
  background-color: rgb(39, 38, 38);
  border: none;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 10px;
  color: rgb(241, 241, 241);
  margin-right: 20px;
}

.Button:hover {
  background-color: rgb(104, 104, 104);
}

form {
  float: right;
}

.login-Forum {
  margin-right: 20px;
}

.input-Form {
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  caret-color: white;
  color: white;
}

.input-Name {
  margin-top: 3px;
  position: absolute;
  font-size: 10px;
  color: white;
}
</style>
