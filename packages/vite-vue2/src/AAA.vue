<template>
  <div>
    <mtd-select
      v-model="a"
      multiple
      filterable
      value-key="value"
      :reserve-keyword="false"
    >
      <mtd-option v-for="option in options" :key="option.value" :label="option.label" :value="option" />
    </mtd-select>
    <mtd-input
      :model-value="b"
      :status="!!false ? 'error' : ''"
      placeholder="输入范围0.01元-50.00元"
    >
      <template slot="append">元</template>
    </mtd-input>
  </div>
  
</template>

<script lang="ts">
export default {
  data() {
    return {
      a: [{
          label: 'aa',
          value: '11'
        }],
      b: '1',
      options: [
        {
          label: 'aa',
          value: '11'
        },
        {
          label: 'aaa',
          value: '111'
        },
        {
          label: 'aaaa',
          value: '1111'
        },
        {
          label: 'aaaaa',
          value: '11111'
        },
        {
          label: 'bb',
          value: '22'
        },
      ]        
    }
  },
  methods: {
    change(query) {
        console.log('ccc', query)
    },
    
  }
}
</script>