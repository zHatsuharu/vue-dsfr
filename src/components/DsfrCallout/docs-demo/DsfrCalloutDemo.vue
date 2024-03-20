<script lang="ts" setup>
import { ref } from 'vue'

import DsfrCallout from '../DsfrCallout.vue'

const title = ref('Un titre de mise en avant avec icône DSFR')
const content = ref('Un contenu de mise en avant')
const title2 = ref('Un titre de mise en avant avec icône OhVueIcon')
</script>

<template>
  <div class="fr-container fr-py-4w">
    <div>
      <DsfrCallout
        icon="fr-icon-information-line"
        :title="title"
        :content="content"
      />
    </div>
    <div>
      <DsfrCallout
        icon="gi-chocolate-bar"
        :title="title2"
        :content="content"
      />
    </div>
  </div>
</template>
