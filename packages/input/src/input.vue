<!--
 * @Author: zdb
 * @Date: 2021-01-18 16:43:35
 * @LastEditors: zdb
 * @LastEditTime: 2021-01-19 11:01:32
 * @Description: file content
-->
<template>
    <div>
      <input v-bind="$attrs" :type="type" :value="value" @input="handlerInput">
    </div>
</template>
<script>
export default {
  name: 'ZdbInput',
  inheritAttrs: false, // 禁用默认继承伏组件属性
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handlerInput (evt) {
      console.log('this', this)
      this.$emit('input', evt.target.value)
      const findParent = parent => {
        while (parent) {
          if (parent.$options.name === 'LgFormItem') {
            break
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }
      const parent = findParent(this.$parent)
      parent.$emit('validate')
    }
  }
}
</script>
<style scoped>

</style>