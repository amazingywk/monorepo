<template>
  <div class="risk-warning-container">
    ddddd
    <mtd-select v-model="aaa" multiple filterable>
      <mtd-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </mtd-select>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const aaa = ref();
const options = [
  {
    label: 'aa',
    value: '11',
  },
  {
    label: 'aaa',
    value: '111',
  },
  {
    label: 'aaaa',
    value: '1111',
  },
  {
    label: 'aaaaa',
    value: '11111',
  },
  {
    label: 'bb',
    value: '22',
  },
];

const fileList = ref([
  {
    name: 'food1.jepg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    thumbUrl:
      'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    size: 25687,
    user: '团团/tuantaun',
    time: '2022/5/20',
  },
  {
    name: 'food2.jepg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    thumbUrl:
      'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    size: 25687,
    user: '团团/tuantaun',
    time: '2022/5/20',
  },
]);

const handleRemove = (file, fileList) => {
  console.log(file, fileList);
};
const handlePreview = (file) => {
  console.log(file);
};
const beforeRemove = (file, fileList) => {
  console.log('befor');
};

var a = 1;
console.log('aaa', a);
</script>

<style scoped></style>
