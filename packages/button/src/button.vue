<template>
  <div>
    <button @click="handlerClick">
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: 'Zdbbutton',
  methods: {
    handlerClick (evt) {
      this.$emit('click', evt)
      evt.preventDefault()
    }
  }
}
</script>
<style scoped>

</style>