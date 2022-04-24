<template>
  <div class="server-card">

  </div>
</template>

<script>
// import {routes} from "@/router";
export default {
  name: "ServerCard",
  data() {
    return {
      servers: null
    }
  },
  created() {
    const itemServer = this.$route.params.name
    console.log(itemServer)
  },
}
</script>

<style scoped>

</style>