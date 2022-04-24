<template>
  <div class="server-list">
    <div class="server-item">
      <table class="table">
        <thead>
        <tr>
          <th>Уникальный номер</th>
          <th>Статус</th>
          <th>Метод</th>
          <th>Уникальный адрес</th>
          <th>Дата</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{{ items.id }}</td>
          <td :class="changeColor(items.status)">{{ items.status }}</td>
          <td>{{ items.method }}</td>
          <td>{{ items.ip }}</td>
          <td>{{ items.date }}</td>
        </tr>
        </tbody>
      </table>
      <router-link to="/servers">
        <MyButton style="background-color: #182137">Назад</MyButton>
      </router-link>
    </div>
  </div>
</template>

<script>
import {servers} from '@/servers/servers'
import MyButton from "@/UI/MyButton/MyButton";

export default {
  name: "ItemServer",
  components: {MyButton},
  props: {
    changeColor: Function
  },
  data() {
    return {
      items: null
    }
  },
  created() {
    const itemId = this.$route.params.itemId
    const server = servers.find(el => el.id === +itemId)
    this.items = server
  }
}
</script>

<style scoped>

.table {
  width: 100%;
  margin-bottom: 20px;
  border: 5px solid #fff;
  border-bottom-width: 3px;
  border-collapse: collapse;
  outline: 3px solid #ffd300;
  font-size: 15px;
  background: #fff !important;
}

.table th {
  font-weight: bold;
  padding: 7px;
  background: #ffd300;
  border: none;
  text-align: left;
  font-size: 15px;
  border-top: 3px solid #fff;
  border-bottom: 3px solid #ffd300;
}

.table td {
  padding: 7px;
  border: none;
  border-top: 3px solid #fff;
  border-bottom: 3px solid #fff;
  font-size: 15px;
}

.table tbody tr:nth-child(even) {
  background: #f8f8f8 !important;
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