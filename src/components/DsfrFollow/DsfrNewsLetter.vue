<script lang="ts" setup>
import type { DsfrNewsLetterProps } from './DsfrFollow.types'

export type { DsfrNewsLetterProps }

withDefaults(defineProps<DsfrNewsLetterProps>(), {
  title: 'Abonnez-vous à notre lettre d’information',
  description: '',
  email: '',
  error: '',
  labelEmail: 'Votre adresse électronique (ex. : prenom.nom@example.com)',
  placeholder: 'prenom.nom@example.com',
  inputTitle: 'Adresse courriel',
  hintText: '',
  buttonText: 'S’abonner',
  buttonTitle: 'S‘abonner à notre lettre d’information',
  buttonAction: () => undefined,
  onlyCallout: false,
})

const emit = defineEmits<{ (e: 'update:email', payload: string): void }>()

// @ts-expect-error this event comes from the input[type=email] so `value` is there
const updateEmail = ($event: InputEvent) => emit('update:email', $event.target.value as string)
</script>

<template>
  <div class="fr-follow__newsletter">
    <div>
      <h3 class="fr-h5 fr-follow__title">
        {{ title }}
      </h3>
      <p class="fr-text--sm fr-follow__desc">
        {{ description }}
      </p>
    </div>
    <div v-if="onlyCallout">
      <button
        class="fr-btn"
        :title="buttonTitle"
        @click="buttonAction ? buttonAction($event) : () => {}"
      >
        {{ buttonText }}
      </button>
    </div>
    <div v-else>
      <form action="">
        <label
          class="fr-label"
          for="newsletter-email"
        >
          {{ labelEmail }}
        </label>
        <div class="fr-input-wrap fr-input-wrap--addon">
          <input
            id="newsletter-email"
            class="fr-input"
            aria-describedby="fr-newsletter-hint-text"
            :title="inputTitle || labelEmail"
            :placeholder="placeholder || labelEmail"
            type="email"
            name="newsletter-email"
            :value="email"
            autocomplete="email"
            @input="updateEmail($event as InputEvent)"
          >
          <button
            id="newsletter-button"
            class="fr-btn"
            :title="buttonTitle"
            type="submit"
          >
            {{ buttonText }}
          </button>
        </div>
        <div
          v-if="error"
          class="fr-messages-group"
          role="alert"
        >
          <p
            id="newsletter-email-desc-error"
            class="fr-error-text"
          >
            {{ error }}
          </p>
        </div>
        <p
          id="fr-newsletter-hint-text"
          class="fr-hint-text"
        >
          {{ hintText }}
        </p>
      </form>
    </div>
  </div>
</template>
