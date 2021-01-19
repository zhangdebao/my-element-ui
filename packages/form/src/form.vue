<!--
 * @Author: zdb
 * @Date: 2021-01-18 16:44:07
 * @LastEditors: zdb
 * @LastEditTime: 2021-01-19 11:00:51
 * @Description: file content
-->
<template>
  <form action="">
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: 'ZdbForm',
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    }
  },
  methods: {
    validate (cb) {
      const tasks = this.$children.filter(child => child.prop).map(child => child.validate())

      Promise.all(tasks).then(() => cb(true))
      .catch(() => cb(false))
    }
  }
}
//  豫园合伙人申购项目
</script>
<style scoped>

</style>