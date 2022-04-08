<template>
  <div class="servers">
        <div class="servers-list" v-for="server in serverInfo" :key="server.id">
          <p>{{server.id}}</p>
          <p>{{ server.method }}</p>
          <p :class="changeColor(server.status)">{{server.status}}</p>
          <p>{{server.ip}}</p>
          <p>{{server.date}}</p>
          <MyButton>Подробнее</MyButton>
        </div>
  </div>
</template>

<script>
import MyButton from "@/UI/MyButton/MyButton";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Servers",
  components: {MyButton},
  data() {
    return {

    }
  },
  props: {
    serverInfo:Array,
    changeColor:Function
  },

}
</script>

<style scoped>
.servers-list {
  display: flex;
  border: 3px solid #229ED9;
  margin-bottom: 20px;
  padding-left: 30px;
  justify-content: space-around;
  height: 70px;
  align-items: center;
  color: #229ED9;
}
.servers-list p {
  width: 100px;
}

.green{
  color: green;
}
.yellow {
  color: yellow;
}
.red {
  color: red;
}



</style>