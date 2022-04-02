<template>
  <header class="header">
    <div class="pers-acc">
      <a href="#">{{ persAcc }}</a>
    </div>
    <div v-show="isLogin" class="email-info">
      <a href="#">{{ email }}</a>
      <button @click="loginLogout" class="btn">Выйти</button>
    </div>
    <button class="btn-loin" @click="loginLogout" v-show="!isLogin">Войти</button>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Head",
  components: {},
  data() {
    return {
      persAcc: 'Личный кабинет',
      email: 'username@someemail.com',
      isLogin: true,
    }
  },
  methods: {
    loginLogout() {
      this.isLogin = !this.isLogin
    },
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: #229ED9;
  width: 100%;
}

header a {
  text-decoration: none;
  color: white;
  font-size: 18px;
}

.pers-acc {
  padding-left: 15px;

}

.email-info {
  padding: 15px;
}

.email-info a {
  padding-right: 20px;
}

.btn {
  width: 100px;
  height: 40px;
  font-size: 18px;
  border: none;
  cursor: pointer;
}

.btn-loin {
  width: 100px;
  height: 40px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  margin-right: 15px;
}
</style>