import ZdbLink from '../src/link.vue'

export default {
  title: 'ZdbLink',
  component: ZdbLink
}

export const Link = _ => ({
  components: { ZdbLink },
  template: `
    <div>
      <zdb-link href="http://www.baidu.com">baidu</zdb-link>
    </div>
  `
})