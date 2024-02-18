<template>
  <MtdModal v-model="visible" @close="close">
    <slot></slot>
    <template #footer>
      <div>
        <mtd-button @click="close" type="panel">取消</mtd-button
        ><mtd-button type="primary" @click="onOk">确定</mtd-button>
      </div>
    </template>
  </MtdModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import { Modal as MtdModal, Button as MtdButton } from '@ss/mtd-vue3';

const emit = defineEmits<{
  (event: 'onOk'): void,
  (event: 'onCancel'): void,
}>()

const visible = ref(true);

const close = () => {
  emit('onCancel');
}

const onOk = () => {
  emit('onOk');
}

</script>