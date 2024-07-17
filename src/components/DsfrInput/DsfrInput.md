# Champ de saisie - `DsfrInput`

## 🌟 Introduction

Le composant `DsfrInput`, outil essentiel dans l'arsenal de tout développeur Vue ! Que ce soit pour saisir votre nom de fromage préféré ou la date de votre dernière visite à la Tour Eiffel, `DsfrInput` est là pour rendre la saisie de données aussi douce qu'un croissant frais le matin 🥐 (oui, on aime bien les croissants par ici).

## 🛠️ Props

| Nom             | Type       | Défaut                   | Obligatoire | Description                                                                                                                                                                                                                                    |
|-----------------|------------|--------------------------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`            | `Function` | `() => getRandomId(...)` |             | Identifiant unique pour l'input. Si non spécifié, un ID aléatoire est généré.                                                                                                                                                                  |
| `descriptionId` | `string`   | `undefined`              |             | ID pour la description associée à l'input. Utile pour l'accessibilité.                                                                                                                                                                         |
| `hint`          | `string`   | `''`                     |             | Texte d'indice pour guider l'utilisateur.                                                                                                                                                                                                      |
| `label`         | `string`   | `''`                     |             | Le libellé de l'input.                                                                                                                                                                                                                         |
| `labelClass`    | `string`   | `''`                     |             | Classe personnalisée pour le style du libellé.                                                                                                                                                                                                 |
| `modelValue`    | `string`   | `''`                     |             | La valeur liée au modèle de l'input.                                                                                                                                                                                                           |
| `wrapperClass`  | `string`   | `''`                     |             | Classe personnalisée pour le style du conteneur de l'input.                                                                                                                                                                                    |
| `valid`         | `boolean`  | `'undefined'`            |             | Valeur liée à la validation du contenu de l'input. Utile pour la validation dans un formulaire.                                                                                                                                                |
| `rules`         | `Array`    | `'[]'`                   |             | Tableau de fonctions utlisées pour la validation. A chaque modification de modelValue, celle-ci est testée par toutes les fonctions et qui met à jour valid et message. Les fonctions doivent renvoyer un string qui sera le message d'erreur. |
| `message`       | `string`   | `'undefined'`            |             | Valeur du message d'erreur. Est soit vide en cas de succès soit contient le retour de la première fonction de rules dont le test n'a pas été passé.                                                                                            |

### Attributs implicitement déclarés

::: warning Important

Toutes les props passées à `<DsfrInput>` dans une template et qui ne sont pas définies dans les props seront passées à la balise `<input>` native du composant (cf. [Attributs implicitement déclarés (Fallthrough attributes)](https://fr.vuejs.org/guide/components/attrs.html) de la documentation officielle de Vue.js.). Comme par exemple `readonly`.

Voici une liste non-exhaustive:

- `name`
- `readonly`
- `disabled`
- `autocomplete`
- `autofocus` ([déconseillé](https://brucelawson.co.uk/2009/the-accessibility-of-html-5-autofocus/))
- `size`
- `maxlength`
- `pattern`

Exemple :

```vue
<script setup>
// (...)
</script>

<template>
  <DsfrInput
    v-model="username"
    label="Nom d’utilisateur"
    name="username"
    pattern="\w{3,20}"
  />
</template>
```

:::

## 📡 Events

| Nom                 | Description                                                                  |
|---------------------|------------------------------------------------------------------------------|
| `update:modelValue` | Événement émis lors de la mise à jour de la valeur de l'input.               |

---

## 🧩 Slots

| Nom              | Description                                                                                       |
|------------------|---------------------------------------------------------------------------------------------------|
| `label`          | Slot pour personnaliser le contenu de la balise `<label>`.                                        |
| `required-tip`   | Slot pour indiquer si le champ est obligatoire. Par défaut, affiche une astérisque si requis.     |

---

## 📝 Exemples

Exemple simple d'utilisation de `DsfrInput` :

::: code-group
<Story data-title="Démo" minH="500px">
  <DsfrInputDemo />
</Story>

<<< docs-demo/DsfrInputDemo.vue [Code de la démo]
:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrInput.vue
<<< DsfrInput.types.ts

:::

<script setup>
import DsfrInputDemo from './docs-demo/DsfrInputDemo.vue'
</script>

Avec `DsfrInput`, la saisie de données devient aussi élégante que la promenade dans un vignoble en automne. 🍇 Bonne programmation !
