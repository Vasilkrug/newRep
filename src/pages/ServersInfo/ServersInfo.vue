<template>
  <div class="servers">
    <div class="servers-list"
         v-for="server in serverInfo"
         :key="server.id">
      <p>{{ server.id }}</p>
      <p>{{ server.method }}</p>
      <p :class="changeColor(server.status)">{{ server.status }}</p>
      <p>{{ server.ip }}</p>
      <p>{{ server.date }}</p>
      <router-link :to="`${server.id}`">
        <MyButton style="background-color: #182137">Подробнее</MyButton>
      </router-link>
    </div>
  </div>
</template>

<script>
import MyButton from "@/UI/MyButton/MyButton";

export default {
  name: "ServersInfo",
  components: {MyButton},
  props: {
    serverInfo: Array,
    changeColor: Function
  },
}
</script>

<style scoped>
.servers-list {
  display: flex;
  border: 3px solid #182137;
  margin-bottom: 20px;
  padding-left: 30px;
  justify-content: space-around;
  height: 70px;
  align-items: center;
  color: #182137;
  -webkit-transition: 0.2s ease;

}

.servers-list p {
  width: 100px;
}

.servers-list:hover {
  transform: translateY(-10px) translateX(10px);
  transition: box-shadow .2s ease, transform .2s ease;
  -webkit-box-shadow: -6px 6px 0 1px;
  -moz-box-shadow: -6px 6px 0 1px;
  box-shadow: -6px 6px 0 1px;
}

.green {
  color: green;
}

.yellow {
  color: #FBD784
}

.red {
  color: red;
}


</style>