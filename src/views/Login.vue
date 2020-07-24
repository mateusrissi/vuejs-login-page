<template>
  <div class="p-3 flex justify-center">
    <div class="w-full max-w-xs">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="submit"
      >
        <span v-if="errors.error" class="text-sm text-orange-500">{{
          errors.error
        }}</span>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
            >Email</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            v-model="form.email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
            >Password</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            v-model="form.password"
          />
        </div>
        <div class="flex justify-center">
          <input
            type="submit"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            value="Login"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      errors: {}
    };
  },
  methods: {
    submit() {
      axios
        .post("http://localhost:4000/login", this.form)
        .then(res => {
          this.$cookies.set("token", res.data);
          window.location = "/";
        })
        .catch(e => {
          this.errors = e.response.body;
        });
    }
  }
};
</script>
