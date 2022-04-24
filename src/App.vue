<template>
  <div id="app">
    <SiteHead/>
    <SideBar/>
    <div class="content">
      <router-view
          :serverInfo="serverInfo"
          :changeColor="changeColor"
      />
    </div>
  </div>
</template>
<!--test-->
<script>
import SiteHead from "@/components/SiteHead/SiteHead";
import SideBar from "@/components/Sidebar/SideBar";
import {servers} from "@/servers/servers"

export default {
  name: 'App',
  components: {
    SideBar,
    SiteHead,
  },
  data() {
    return {
      serverInfo:servers
    }
  },
  methods: {
    changeColor(item) {
      if (item === 'Активен') {
        return 'green'
      } else if (item === 'В ожидании') {
        return 'yellow'
      } else if (item === 'Отключен') {
        return 'red'
      }
    },

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

#app {

}

.content {
  max-width: 1100px;
  margin-left: 280px;
  margin-top: 40px;
}
</style>