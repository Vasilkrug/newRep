<template>
  <header class="header">
    <h4 v-if="activeLink">{{ activeLink }}</h4>
    <h4 v-else>Главная</h4>
    <div class="head-item">
      <a href="mailto:username@someemail.com">username@someemail.com</a>
      <MyButton style="background: white; color:#182137">
        Выйти
      </MyButton>
    </div>
  </header>
</template>

<script>
import MyButton from "@/UI/MyButton/MyButton";
import {mapState} from 'vuex'

export default {
  name: "SiteHead",
  components: {MyButton},
  computed: {
    ...mapState({
      activeLink: 'activeLink'
    })
  },
}
</script>

<style lang="scss" scoped>
</style>