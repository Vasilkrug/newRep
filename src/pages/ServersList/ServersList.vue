<template>
  <div class="servers">
    <div class="servers-list"
         v-for="server in servers"
         :key="server.id">
      <p>{{ server.id }}</p>
      <p>{{ server.method }}</p>
      <p :style="{color:changeColor(server.status)}">{{ server.status }}</p>
      <p>{{ server.ip }}</p>
      <p>{{ server.date }}</p>
      <router-link :to="`/servers/${server.id}`">
        <MyButton style="background-color: #182137">Подробнее</MyButton>
      </router-link>
    </div>
  </div>
</template>

<script>
import MyButton from "@/UI/MyButton/MyButton";
import {mapState} from 'vuex'
import {changeColor} from "@/utilits/style";

export default {
  name: "ServersList",
  components: {MyButton},
  computed: {
    ...mapState({
      servers: 'servers',
    }),
  },
  methods:{
    changeColor: changeColor,
  },
}
</script>

<style lang="scss" scoped>
</style>