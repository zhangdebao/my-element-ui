import ZdbForm from '../'
import ZdbFormItem from '../../formItem/'
import ZdbInput from '../../input/'
import ZdbButton from '../../button'

export default {
  title: 'ZdbForm',
  component: ZdbForm
}

export const Login = () => ({
  components: { ZdbForm, ZdbFormItem, ZdbInput, ZdbButton },
  template: `
    <zdb-form class="form" ref="form" :model="user" :rules="rules">
      <zdb-form-item label="用户名" prop="username">
        <zdb-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></zdb-input>
      </zdb-form-item>
      <zdb-form-item label="密码" prop="password">
        <zdb-input type="password" v-model="user.password"></zdb-input>
      </zdb-form-item>
      <zdb-form-item>
        <zdb-button type="primary" @click="login">登 录</zdb-button>
      </zdb-form-item>
    </zdb-form>  
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})
