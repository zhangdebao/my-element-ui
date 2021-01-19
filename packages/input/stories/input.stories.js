import ZdbInput from '../'

export default {
  title: 'ZdbInput',
  component: ZdbInput
}

export const Text = () => ({
  components: {
    LgInput
  },
  template: '<lg-input v-model="value"></lg-input>',
  data() {
    return {
      value: 'admin'
    }
   }
}) // 返回一个对象， 所以加()

export const password = () => ({
  components: { LgInput },
  template: '<lg-input type="password" v-model="value"></lg-input>',
  data() { 
    return {
      value: 'admin'
    }
  }
})