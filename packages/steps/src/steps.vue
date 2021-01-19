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
.zdb-steps {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.zdb-steps-line {
  position: absolute;
  height: 2px;
  top: 50%;
  left: 24px;
  right: 24px;
  transform: translateY(-50%);
  z-index: 1;
  background: rgb(223, 231, 239);
}

.zdb-step {
  border: 2px solid;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  z-index: 2;
  background-color: white;
  box-sizing: border-box;
}

</style>
