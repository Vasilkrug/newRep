<template>
  <aside class="sidebar">
    <div class="nav-item">
      <ul class="nav-link" v-for="item of links" :key="item">
        <li><a href="#"><img :src="item.img">{{ item.link }}</a></li>
      </ul>
    </div>
  </aside>

</template>

<script>

export default {
  name: "SideBar",
  data() {
    return {
      links: [
        {link: 'Личный кабинет', img: 'home.png'},
        {link: 'Каналы', img: 'telegram.png'},
        {link: 'Настройки', img: 'setting.png'},
      ]
    }
  }

}
</script>

<style scoped>
.sidebar {
  background: #229ED9;
  min-width: 200px;
  min-height: 100vh;
}

.nav-link li {
  padding-top: 30px;
  padding-left: 10px;
  list-style: none;
}

.nav-link a {
  text-decoration: none;
  color: white;
  font-size: 18px;

}

.nav-link img {
  padding-right: 5px;
}
</style>