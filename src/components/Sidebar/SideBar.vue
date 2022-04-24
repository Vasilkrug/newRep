<template>
  <div class="nav">
    <h4>{{ activeLink }}</h4>
    <ul class="nav-list">
      <li @click="activePage" class="nav-item"
          v-for="link in links"
          :key="link.name">
        <router-link :to="link.url">
          <img :src="link.img"/> {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {links} from "@/servers/servers";

export default {
  name: "SideBar",
  data() {
    return {
      links,
      activeLink: 'Личный кабинет'
    }
  },
  methods: {
    activePage(event) {
      this.activeLink = event.target.textContent;
      localStorage.setItem('page', this.activeLink)
    },
    localActivePage() {
      this.activeLink = localStorage.getItem('page')
    }
  },

  mounted() {
    this.localActivePage()
  }
}
</script>

<style scoped>
.nav {
  width: 250px;
  background: #182137;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 40px;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;
}

h4 {
  padding-left: 25px;
}

.nav-list {
  margin-top: 40px;
}

.nav-list a {
  position: relative;
  text-decoration: none;
  color: white;
  font-weight: 600;
}

.nav-list a:hover {
  color: #FBD784;
  transition: 0.2s ease-in;
}

.nav-list a::after {
  position: absolute;
  left: 0;
  bottom: -15px;
  display: block;
  content: '';
  width: 100%;
  height: 2px;
  background-color: #FBD784;
  opacity: 0;
  transition: all 0.2s ease-in;
}

.nav-list a:hover::after {
  bottom: -5px;
  background-color: #FBD784;
  opacity: 1;
}

.nav-item {
  padding-left: 25px;
  padding-top: 32px;
}

.nav-item img {
  width: 20px;
  height: 20px;
  margin-right: 15px;
}
</style>