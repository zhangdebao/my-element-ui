<template>
  <div>
    <label for="">{{label}}</label>
    <div>
      <slot></slot>
      <p v-if="errMessage">{{errMessage}}</p>
    </div>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'
export default {
  name: 'LgFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
    }
  },
  data () {
    return {
      errMessage: ''
    }
  },
  mounted () {
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate () {
      if (!this.prop) return
      const value = this.form.model[this.prop]
      const rule = this.form.rules[this.prop]
      const descriptor = {
        [this.prop]: rule
      }
      const validate = new AsyncValidator(descriptor)
      return validate.validate({
        [this.prop]: value
      }, errors => {
        if (errors) {
          this.errMessage = errors[0].message
        } else {
          this.errMessage = ''
        }
      })
    }
  }
}
</script>
<style scoped>

</style>