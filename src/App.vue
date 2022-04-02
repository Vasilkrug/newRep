<template>
  <div id="app">
    <Head/>
    <ContentBlock :content="content"/>
  </div>
</template>

<script>

import Head from "@/components/Head/Head";
import ContentBlock from "@/components/ContenBlock/ContenBlock";

export default {
  name: 'App',
  components: {
    ContentBlock,
    Head

  },
  data(){
    return {
      content: [
        {title: 'Настройки'},
        {title: ''},
      ]
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  max-width: 100%;
}

</style>
