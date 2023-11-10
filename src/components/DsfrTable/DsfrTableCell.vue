<script lang="ts" setup>
import { type TdHTMLAttributes, computed } from 'vue'

export type DsfrTableCellProps = {
  field?: string | {
    text: string;
    component?: string;
    [key: string]: unknown;
  }
  cellAttrs?: TdHTMLAttributes
}

const props = withDefaults(defineProps<DsfrTableCellProps>(), {
  cellAttrs: () => ({}),
})

const component = computed(() => {
  return (typeof props.field === 'object' && props.field !== null && props.field.component) ? props.field.component : false
})
</script>

<template>
  <td v-bind="cellAttrs">
    <component
      :is="component"
      v-if="typeof field === 'object' && component"
      v-bind="field"
    >
      {{ typeof field === 'object' ? field.text : '' }}
    </component>
    <template v-else>
      {{ typeof field === 'object' ? field.text : field }}
    </template>
  </td>
</template>
