<template>
    <div>
      <input v-bind="$attrs" :type="type" :value="value" @input="handlerInput">
    </div>
</template>
<script>
export default {
  name: 'LgInput',
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