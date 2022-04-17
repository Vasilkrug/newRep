<template>
  <div class="personal-acc">
    <h4>Подключенные серверы</h4>
    <table class="table">
      <tbody>
      <tr class="personal-acc-block"
          v-for="item in serverInfo"
          :key="item.id">
        <td>id:{{ item.id }}</td>
        <td>{{ item.method }}</td>
        <td :class="changeColor(item.status)">{{ item.status }}</td>
        <td>{{ item.ip }}</td>
        <td>{{ item.date }}</td>
        <td>
          <MyButton style="background-color: #182137">Подробнее</MyButton>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MyButton from "@/UI/MyButton/MyButton";

export default {
  name: "PersonalAcc",
  components: {MyButton},
  props: {
    serverInfo: Array,
    changeColor: Function
  },
}
</script>

<style scoped>
.personal-acc {
  border: 3px solid #182137;
}

h4 {
  color: #182137;
  font-size: 18px;
  margin: 25px;
}

.personal-acc-block {
  height: 90px;
  margin-bottom: 30px;
  color: #182137;
  font-size: 18px;
}

.personal-acc-block td {
  padding-left: 50px;
  padding-right: 20px;
}

.green {
  color: green;
}

.yellow {
  color: #FBD784;
}

.red {
  color: red;
}

</style>