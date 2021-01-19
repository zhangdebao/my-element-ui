<!--
 * @Author: zdb
 * @Date: 2021-01-18 16:27:21
 * @LastEditors: zdb
 * @LastEditTime: 2021-01-19 10:58:50
 * @Description: file content
-->
# my-element-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


安装步骤
```
vue create my-element-ui
npx sb init 

yarn workspace lg-button add lodash@4

lerna init

npm addUser

npm run lerna // 发布

```

### Vue单元测试
- 安装测试依赖
```
npm i jest @vue/test-utils vue-jest babel-jest -D -W
```
- Jest的配置
```
// jest.config.js
module.exports = {
  "testMatch": ["**/__tests__/**/*.[jt]s?(x)"],
  "moduleFileExtensions": [
    'js',
    'json',
    // 告诉 Jest处理 ’*.vue‘文件
    'vue'
  ],
  transform: {
    // 用 `vue-jest`处理'.vue'文件
    '.*\\.(vue)$': "vue-jest",
    // 用 'babel-jest'处理js
    '.*\\.(js)': 'babel-jest'
  }
}
```
### 桥接 `npm i babel-core@bridge -D -W`

##### 单个打包 `yarn workspace zdb-button run build`

### 批量打包
- plugin-json  可以把json文件当作模块加载
- plugin-node-resolve 把依赖的第三方包打包进来
```
npm i @rollup/plugin-json rollup-plugin-postcss @rollup/plugin-node-resolve -D -W
```

### 生成组件
```
npm run plop
```


