<template>
  <div class="settings">
    <h4>Настройки</h4>
    <div class="form-block">
      <form class="form">
        <label>
          Почта для уведомлений
          <input placeholder="Введите Вашу почту"/>
        </label>
        <label>
          Телефон для связи
          <input class="second-input" placeholder="Введите Ваш телефон"/>
        </label>
        <MyButton style="background-color: #182137">Сохранить</MyButton>
      </form>
    </div>
  </div>
</template>

<script>
import MyButton from "@/UI/MyButton/MyButton";

export default {
  name: "PersonalSettings",
  components: {MyButton}
}
</script>

<style lang="scss" scoped>
</style>