<script lang="ts" setup>
import type { Ref } from 'vue'
import { computed, ref, useAttrs } from 'vue'

import { getRandomId } from '../../utils/random-utils'

import type { DsfrInputProps } from './DsfrInput.types'

export type { DsfrInputProps }

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DsfrInputProps>(), {
  id: () => getRandomId('basic', 'input'),
  descriptionId: undefined,
  hint: '',
  label: '',
  labelClass: '',
  modelValue: '',
  wrapperClass: '',
  loading: false,
})

defineEmits<{ (e: 'update:modelValue', payload: string): void }>()

const attrs = useAttrs()

const __input: Ref<HTMLElement | null> = ref(null)
const focus = () => __input.value?.focus()

const isComponent = computed(() => props.isTextarea ? 'textarea' : 'input')
const wrapper = computed(() => props.isWithWrapper || attrs.type === 'date' || !!props.wrapperClass)
const finalLabelClass = computed(() => [
  'fr-label',
  { invisible: !props.labelVisible },
  props.labelClass,
])

defineExpose({
  focus,
})
</script>

<template>
  <label
    :class="finalLabelClass"
    :for="id"
  >
    <!-- @slot Slot pour personnaliser tout le contenu de la balise <label> -->
    <slot name="label">
      {{ label }}
      <!-- @slot Slot pour indiquer que le champ est obligatoire. Par défaut, met une astérisque si `required` est à true (dans un `<span class="required">`) -->
      <slot name="required-tip">
        <span
          v-if="'required' in $attrs && $attrs.required !== false"
          class="required"
        >*</span>
      </slot>
    </slot>

    <span
      v-if="hint"
      class="fr-hint-text"
    >{{ hint }}</span>
  </label>
  <div class="component">
    <component
      :is="isComponent"
      v-if="!wrapper"
      :id="id"
      v-bind="$attrs"
      ref="__input"
      class="fr-input"
      :class="{
        'fr-input--error': isInvalid,
        'fr-input--valid': isValid,
      }"
      :value="modelValue"
      :aria-describedby="descriptionId || undefined"
      :disabled="disabled || loading"
      :aria-disabled="disabled || loading"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div
      v-else
      :class="[
        { 'fr-input-wrap': isWithWrapper || $attrs.type === 'date' },
        wrapperClass,
      ]"
    >
      <component
        :is="isComponent"
        :id="id"
        v-bind="$attrs"
        ref="__input"
        class="fr-input"
        :class="{
          'fr-input--error': isInvalid,
          'fr-input--valid': isValid,
        }"
        :value="modelValue"
        :aria-describedby="descriptionId || undefined"
        :disabled="disabled || loading"
        :loading="loading"
        :aria-disabled="disabled || loading"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
    <div class="loader">
      <VIcon
        v-if="loading"
        style="width: 25px; height: 25px;"
        name="ri-loader-4-line"
        animation="spin"
      />
    </div>
  </div>
</template>

<style scoped>
.invisible {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  }
.fr-input-wrap{
  width: 100%;
}
.component{
  display: flex;
}
.loader{
  display: flex;
  align-items: center;
}
</style>
