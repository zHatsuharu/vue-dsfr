# Mise en avant - `DsfrCallout`

## 🌟 Introduction

La mise en avant permet à l’utilisateur de distinguer rapidement une information qui vient compléter le contenu consulté.

C’est une proposition de mise en page du contenu éditorial pour mettre en évidence une information complémentaire.

🏅 La documentation sur la mise en avant sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/mise-en-avant)

<VIcon name="vi-file-type-storybook" /> La story sur la mise en avant sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrcallout--docs)

## 📐 Structure

Le composant se compose principalement de :

- Une icône optionnelle (`VIcon`), affichée si les props `icon` sont fournies.
- Un titre (`titleTag`), dont la balise peut être personnalisée.
- Un texte de contenu (`content`).
- Un bouton (`DsfrButton`), affiché si les props `button` sont fournies.
- Un slot par défaut pour inclure du contenu supplémentaire.

## 🛠️ Props

|  Nom                   |   Type      |  Défaut         | Obligatoire | Description |
| ----------------------- | ---------   | ---------------- | ------ | ----- |
| `button`                    | `DsfrButtonProps`    | `undefined`  | | Props à passer à un DsfrButton
| `titleTag`              | [`TitleTag`](/docs/types.md#title-tag "'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'")  |    `'h3'`     | | Balise du titre de la mise en avant |
| `icon`     | `string \| InstanceType<typeof VIcon>['$props']` | `undefined` |             |  Icône à afficher à côté du titre (facultatif). Si la valeur est une string commençant par `'fr-'`, cette classe sera ajoutée à la balise `<label>`, sinon c’est une icône OhVueIcon qui sera utilisée                        |

## 📡 Événements

Ce composant n'émet pas d'événements personnalisés.

## 🧩 Slots

- **Slot par défaut** : Permet d'insérer du contenu personnalisé qui sera placé dans le div `fr-callout`.

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="390px">
  <DsfrCalloutDemo />
</Story>

<<< docs-demo/DsfrCalloutDemo.vue [Code de la démo]
:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrCallout.vue
<<< DsfrCallout.types.ts

:::

<script setup lang="ts">
import DsfrCalloutDemo from './docs-demo/DsfrCalloutDemo.vue'
</script>
