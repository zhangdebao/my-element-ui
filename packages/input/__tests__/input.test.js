import Input from '../src/input.vue'
import { mount } from '@vue/test-utils' 

describe('zdb-input', () => { 
  test('input-text', () => { 
    const wrpper = mount(Input)
    expect(wrpper.html()).toContain('input type="text"')
  })

  test('input-password', () => { 
    const wrpper = mount(Input, {
      propsData: {
        type: 'password'
      }
    })
    expect(wrpper.html()).toContain('input type="password"')
  })

  test('input-password-value', () => { 
    const wrpper = mount(Input, {
      propsData: {
        type: 'password',
        value: 'admin'
      }
    })
    expect(wrpper.props('value')).toBe('admin')
  })

  test('input-snapshot', () => { 
    const wrpper = mount(Input, {
      propsData: {
        type: 'password',
        value: 'admin'
      }
    })
    expect(wrpper.vm.$el).toMatchSnapshot() // 第一次生成快照，存储到文件中
  })
})