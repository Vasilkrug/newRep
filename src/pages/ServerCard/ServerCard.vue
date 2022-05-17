<template>
  <MyModal>
    <template v-slot:title>
      Удалить сервер?
    </template>
    <template v-slot:footer>
      <MyButton
          @click="DELETE_SERVER(itemId);
          IS_MODAL_VISIBLE()
          redirect()"
          style="background-color: #182137">
        Да
      </MyButton>
      <MyButton
          @click="IS_MODAL_VISIBLE"
          style="background-color: #182137">
        Отмена
      </MyButton>
    </template>
  </MyModal>
  <div class="server-list" v-if="itemServer">
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
          <td>{{ itemServer.id }}</td>
          <td :style="{color: changeColor(itemServer.status)}">{{ itemServer.status }}</td>
          <td>{{ itemServer.method }}</td>
          <td>{{ itemServer.ip }}</td>
          <td>{{ itemServer.date }}</td>
        </tr>
        </tbody>
      </table>
      <MyButton
          @click="IS_MODAL_VISIBLE();"
          style="background-color: #182137">
        Удалить
      </MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "@/UI/MyButton/MyButton";
import {mapMutations, mapGetters} from "vuex";
import MyModal from "@/UI/MyModal/MyModal";
import {changeColor} from "@/utilits/style";

export default {
  name: "ServerCard",
  components: {MyModal, MyButton},
  methods: {
    ...mapMutations({
      DELETE_SERVER : 'DELETE_SERVER',
      IS_MODAL_VISIBLE: 'IS_MODAL_VISIBLE',
    }),
    changeColor : changeColor,
    redirect() {
      this.$router.push({name: 'Cерверы'})
    }
  },
  computed: {
    ...mapGetters({
      ACTIVE_ITEM_SERVER:'ACTIVE_ITEM_SERVER'
    }),
    itemId(){
      return this.$route.params.itemId
    },
    itemServer() {
      return this.ACTIVE_ITEM_SERVER(this.itemId)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>