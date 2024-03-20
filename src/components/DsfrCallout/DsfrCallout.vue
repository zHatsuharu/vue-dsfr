<script lang="ts" setup>
import { computed } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

import DsfrButton from '../DsfrButton/DsfrButton.vue'

import type { DsfrCalloutProps } from './DsfrCallout.types'

export type { DsfrCalloutProps }

const props = withDefaults(defineProps<DsfrCalloutProps>(), {
  // @ts-ignore this is really undefined
  button: () => undefined,
  titleTag: 'h3',
  icon: undefined,
})

const dsfrIcon = computed(() => typeof props.icon === 'string' && props.icon.startsWith('fr-icon-'))
const iconProps = computed(() => (dsfrIcon.value || !props.icon)
  ? undefined
  : (
      typeof props.icon === 'string'
        ? { name: props.icon, scale: 1.2 }
        : { ...(props.icon ?? {}) }
    ),
)
</script>

<template>
  <div
    class="fr-callout"
    :class="{ [String(icon)]: dsfrIcon }"
  >
    <template
      v-if="!dsfrIcon && iconProps"
    >
      <VIcon
        v-bind="iconProps"
      />
    </template>
    <component
      :is="titleTag"
      class="fr-callout__title"
    >
      {{ title }}
    </component>

    <p class="fr-callout__text">
      {{ content }}
    </p>

    <DsfrButton
      v-if="button"
      v-bind="button"
    />

    <!-- @slot Slot par défaut pour le contenu de la mise en avant. Sera dans `<div class="fr-callout">` -->
    <slot />
  </div>
</template>
