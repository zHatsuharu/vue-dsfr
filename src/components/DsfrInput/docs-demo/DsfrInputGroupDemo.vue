<script lang="ts" setup>
import { ref } from 'vue'

import DsfrInputGroup from '../DsfrInputGroup.vue'
import DsfrInput from '../DsfrInput.vue'

const type = 'text'
const label = 'Label champ de saisie'
const placeholder = 'placeholder'
const modelValue = ref('')
const modelValue2 = ref('')
const validMessage = 'Message de validation'
const errorMessage = 'Message d’erreur'
const hint = 'Texte d’indice du champ'
const id = ''
const readonly = ''
const valid1 = ref(false)

const isNotEmpty = (chain: string) => {
  if (chain.length === 0) {
    return 'Ce champs est obligatoire'
  } else {
    return ''
  }
}

const isEmail = (chain: string) => {
  if (!chain.includes('@')) {
    return 'structure incorrecte pour une addresse électronique'
  } else {
    return ''
  }
}
</script>

<template>
  <div class="fr-container fr-my-2w">
    <h2>1. Avec un message de succès</h2>

    <DsfrInputGroup
      :id="id"
      :valid-message="validMessage"
      :placeholder="placeholder"
      :readonly="readonly !== ''"
      v-model:model-value="modelValue"
      :label="label"
      :type="type"
      :hint="hint"
      :rules="[isNotEmpty, isEmail]"
      label-visible
    />

    <h2>2. Avec un message d’erreur</h2>

    <DsfrInputGroup
      :id="id"
      :placeholder="placeholder"
      :readonly="readonly !== ''"
      v-model:model-value="modelValue2"
      :label="label"
      :type="type"
      :hint="hint"
      :rules="[isNotEmpty, isEmail]"
      label-visible
    />

    <h2>3. Avec plusieurs champs de saisie</h2>

    <DsfrInputGroup
      :valid-message="validMessage"
    >
      <p>
        <DsfrInput
          :id="id"
          :placeholder="placeholder"
          :readonly="readonly !== ''"
          v-model:model-value="modelValue"
          v-model:valid="valid1"
          :valid-message="validMessage"
          :error-message="errorMessage"
          :rules="[isNotEmpty]"
          :label="label"
          :type="type"
          :hint="hint"
          label-visible
        />
      </p>

      <p>
        <DsfrInput
          :id="id"
          :placeholder="placeholder"
          :readonly="readonly !== ''"
          v-model:model-value="modelValue2"
          v-model:valid="valid1"
          :rules="[isNotEmpty]"
          :label="label"
          :type="type"
          :hint="hint"
          label-visible
        />
      </p>
    </DsfrInputGroup>
  </div>
</template>
