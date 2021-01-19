<!--
 * @Author: zdb
 * @Date: 2021-01-18 16:43:12
 * @LastEditors: zdb
 * @LastEditTime: 2021-01-19 11:02:12
 * @Description: file content
-->
<template>
  <div class="zdb-steps">
    <div class="zdb-steps-line"></div>
    <div
      class="zdb-step"
      v-for="index in count"
      :key="index"
      :style="{ color: active >= index ? activeColor : defaultColor }"
    >
      {{ index }}
    </div>
  </div>
</template>

<script>
import './steps.css'
export default {
  name: 'ZdbSteps',
  props: {
    count: {
      type: Number,
      default: 3
    },
    active: {
      type: Number,
      default: 0
    },
    activeColor: {
      type: String,
      default: 'red'
    },
    defaultColor: {
      type: String,
      default: 'green'
    }
  }
}
</script>

<style>

</style>
