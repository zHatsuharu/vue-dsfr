<script lang="ts" setup>
import { computed, type Ref, ref, watch } from 'vue'

import { getRandomId } from '@/utils/random-utils'

import type { DsfrInputGroupProps } from './DsfrInput.types'
import DsfrInputEXP from '@/components/DsfrInput/DsfrInput.vue'

export type { DsfrInputGroupProps }

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DsfrInputGroupProps>(), {
  descriptionId: () => getRandomId('basic', 'input'),
  hint: '',
  label: '',
  labelClass: '',
  wrapperClass: '',
  placeholder: undefined,
  validMessage: undefined,
  rules: [],
})

const modelValue = defineModel('modelValue', { required: false })
const valid = defineModel('valid', { required: false, default: undefined })

const message: Ref<string | undefined> = ref('')
const messageClass = computed(() => valid.value ? 'fr-valid-text' : 'fr-error-text')
watch(() => valid.value, () => {
  if (valid.value) {
    message.value = props.validMessage
  }
})
</script>

<template>
  <div
    class="fr-input-group"
    :class="[
      {
        'fr-input-group--error': !valid && !!message,
        'fr-input-group--valid': valid && !!validMessage && !!message,
      },
      wrapperClass,
    ]"
  >
    <slot name="before-input"/>
    <!-- @slot Slot par défaut pour le contenu du groupe de champ -->
    <slot/>
    <DsfrInputEXP
      v-if="!$slots.default"
      v-bind="$attrs"
      v-model:valid="valid"
      v-model:model-value="modelValue"
      v-model:message="message"
      :label="label"
      :hint="hint"
      :description-id="(message && descriptionId) || undefined"
      :label-visible="labelVisible"
      :placeholder="placeholder"
      :rules="rules"
    />
    <div
      v-if="message"
      class="fr-messages-group"
      role="alert"
    >
      <p
        :id="descriptionId"
        :data-testid="descriptionId"
        :class="messageClass"
      >
        <span>{{ message }}</span>
      </p>
    </div>
  </div>
</template>
