<template>
  <div class="personal-acc">
    <h4>Количество Подключенных серверов: {{QUANTITY_OF_SERVERS}}</h4>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "PersonalAcc",
  computed:{
    ...mapGetters({
      QUANTITY_OF_SERVERS:'QUANTITY_OF_SERVERS'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>