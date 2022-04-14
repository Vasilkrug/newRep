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

<script>
import SiteHead from "@/components/SiteHead/SiteHead";
import SideBar from "@/components/Sidebar/SideBar";

export default {
  name: 'App',
  components: {
    SideBar,
    SiteHead,
  },
  data() {
    return {
      serverInfo: [
        {
          id: 104,
          method: 'Cabinet',
          status: 'В ожидании',
          ip: '135.181.162.244',
          date: new Date().toLocaleDateString()
        },
        {id: 201, method: 'Api', status: 'Активен', ip: '135.181.162.244', date: new Date().toLocaleDateString()},
        {id: 241, method: 'Core', status: 'Отключен', ip: '135.181.162.244', date: new Date().toLocaleDateString()},
        {id: 297, method: 'Notify', status: 'Активен', ip: '135.181.162.244', date: new Date().toLocaleDateString()},
      ]
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
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;

}

#app {

}

.content {
  max-width: 1100px;
  margin-left: 280px;
  margin-top: 40px;
}
</style>