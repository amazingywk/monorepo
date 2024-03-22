<template>
  <div>
    <div v-for="group in materials" :key="group.name">
      {{ group.name }}
      <div
        v-for="field in group.list"
        :key="field.componentName"
        :draggable="true"
        @dragstart="dragstart"
      >
        {{ field.configure.category.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getUnitComponentsMap } from './index';
import { INodeSchema } from './type';

interface IGroup {
  name: string;
  list: INodeSchema[];
}
const materials = ref<IGroup[]>([]);

const initMaterials = async () => {
  const allFields = Object.values(await getUnitComponentsMap()).filter(
    (field) => field.configure.category
  );

  allFields.map((field) => {
    const category = field.configure.category;
    const hasGroup = materials.value.find(
      (group) => group.name === category.group
    );
    if (hasGroup) {
      hasGroup.list.push(field);
    } else {
      materials.value.push({ name: category.group, list: [field] });
    }
  });
};

const dragstart = (e) => {
  console.log('dragstart', e);
};

const initSetup = () => {
  initMaterials();
};

initSetup();
</script>
