<template>
  <div>
    test
    <button @click="open">open</button>
  </div>
</template>

<script setup lang="ts">
import { useDialog } from '@/hooks/dialog';
// import Modal from './Modal.vue';
import Child from './Child.vue';

const { openDialog } = useDialog();

const open = () => {
  openDialog(Child, {id: 'child'}, '标题').then((id) => {
    console.log('id', id)
  });
}
</script>