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

<style scoped>
.settings {
  border: 3px solid #182137;
  display: flex;
  flex-direction: column;
}

h4 {
  padding: 15px;
  color: #182137;
  font-size: 18px;
  margin: 10px;
}

.form {
  display: flex;
  flex-direction: column;
  padding: 30px;
}

label {
  margin-bottom: 50px;
  color: #182137;
  font-size: 16px;
}

input {
  height: 40px;
  width: 380px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-left: 10px;
  border: none;
  outline-color: #182137;
  margin-left: 30px;
}

.second-input {
  margin-left: 65px;
}

input::placeholder {
  color: #182137;
  font-size: 18px;
}
</style>