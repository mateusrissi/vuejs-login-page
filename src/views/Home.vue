<template>
  <div class="text-center">
    <h1 class="text-3x1">Welcome, {{ user.name }}</h1>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {}
    };
  },
  created() {
    const token = this.$cookies.get("token");

    axios
      .get("http://localhost:4000/me", {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(res => {
        this.user = res.data;
      });
  }
};
</script>
