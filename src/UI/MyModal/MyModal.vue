<template>
  <transition name="modal">
  <div class="modal-window" v-if="showModal">
    <div class="modal-content">
      <div class="modal-title">
        <slot name="title"></slot>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-btns">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: "MyModal",
  computed: {
    ...mapState(['showModal'])
  }
}
</script>

<style lang="scss">
</style>