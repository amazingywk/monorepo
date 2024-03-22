<script setup lang="ts">
import { ref } from 'vue';
import AAA from './AAA.vue';

const aaa = ref('Tab1');
</script>

<template>
  <mtd-tabs v-model="aaa">
    <mtd-tab-pane label="Tab1" value="Tab1">
      <AAA />
    </mtd-tab-pane>
    <mtd-tab-pane label="Tab2" value="Tab2">
      示例内容: <br />
      我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间！
    </mtd-tab-pane>
    <mtd-tab-pane label="Tab3" value="Tab3">
      示例内容: <br />
      转朱阁，低绮户，照无眠。 不应有恨，何事长向别时圆？
    </mtd-tab-pane>
    <mtd-tab-pane label="Tab4" value="Tab4" disabled>
      示例内容: <br />
      人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。
    </mtd-tab-pane>
  </mtd-tabs>
</template>

<style scoped>
</style>
