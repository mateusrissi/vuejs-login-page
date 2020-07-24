<template>
  <div id="app">
    <div class="p-2 text-white bg-green-700">
      <router-link v-if="loggedIn" to="/">Home </router-link>
      <router-link v-else to="/login">Login </router-link>
      <router-link v-if="loggedIn" to="/about">About </router-link>
      <a href="" v-if="loggedIn" @click="logout">Logout</a>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: window.loggedIn,
    };
  },
  methods: {
    logout() {
      window.loggedIn = false;
      this.$cookies.remove("token");
      window.location = "/login";
    },
  },
};
</script>
