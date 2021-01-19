import ZdbInput from '../'

export default {
  title: 'ZdbInput',
  component: ZdbInput
}

export const Text = () => ({
  components: {
    ZdbInput
  },
  template: '<zdb-input v-model="value"></zdb-input>',
  data() {
    return {
      value: 'admin'
    }
   }
}) // 返回一个对象， 所以加()

export const password = () => ({
  components: { ZdbInput },
  template: '<zdb-input type="password" v-model="value"></zdb-input>',
  data() { 
    return {
      value: 'admin'
    }
  }
})