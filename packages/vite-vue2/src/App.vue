<script setup lang="ts">
import {ref} from 'vue';
import AAA from './AAA.vue';

const a = ref(23)

const add = () => {
  a.value++;
}

const fileList = ref([
  {
    name: "food1.jepg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    thumbUrl: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    size: 25687,
    user: '团团/tuantaun',
    time: '2022/5/20',
  },
  {
    name: "food2.jepg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    thumbUrl: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    size: 25687,
    user: '团团/tuantaun',
    time: '2022/5/20',
  },
])



const handleRemove = (file, fileList) => {
  console.log(file, fileList);
}
const handlePreview = (file) => {
  console.log('handlePreview', file);
}
const beforeRemove = (file, fileList) => {
  console.log("befor")
}

const bbb = ref();

const show = (a, b) => {
  console.log("show", a, b, bbb.value)
}

</script>

<template>
  <div>
    <AAA />
    {{a}}
    <button @click="add">add</button>
    <mtd-upload
      class="upload-base"
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
      :on-preview="handlePreview"
      list-type="picture-card"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :show-file-down="true"
      :file-list="fileList">
      <mtd-button icon="export-o">点击上传</mtd-button>
    </mtd-upload>

    <mtd-date-picker v-model="bbb" type="datetime" value-format="timestamp" format="yyyy-MM-dd" @change="show" :clearable="true" @confirm="show"></mtd-date-picker>

    -----
    <mtd-tooltip placement="top">
      <template #content>
        <div>123</div>
      </template>
      <div>456</div>
    </mtd-tooltip>
    -------
    <mtd-tooltip placement="top">
      <div>123</div>
      <template #content>
        <div class="has-tip">456</div>
      </template>
    </mtd-tooltip>




    sfdjklfsakdjfj
    <mtd-tooltip placement="top">
      <template #content>
        <div>1111</div>
      </template>
      <div class="has-tip">222</div>
    </mtd-tooltip>
  </div>
</template>

<style scoped>
</style>
