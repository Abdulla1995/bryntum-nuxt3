<template>
  <div>
    <h1>Grid view</h1>
    <bryntum-grid
        v-bind="gridConfig"
    />
  </div>
</template>

<script setup>
import { BryntumGrid } from '@bryntum/grid-vue-3'

let gridConfig = {
  data : [
    { name : 'Dan Stevenson', city : 'Los Angeles' },
    { name : 'Talisha Babin', city : 'Paris' }
  ],
  columns : [
    { field : 'name', text : 'Name', width : 200 },
    { field : 'city', text : 'City', flex : 1 }
  ]
}
</script>
