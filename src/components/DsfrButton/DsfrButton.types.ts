import type { ButtonHTMLAttributes } from 'vue'
import type { OhVueIcon as VIcon } from 'oh-vue-icons'

export type DsfrButtonProps = {
  disabled?: boolean
  loading?: boolean
  label?: string
  secondary?: boolean
  tertiary?: boolean
  iconRight?: boolean
  iconOnly?: boolean
  noOutline?: boolean
  size?: 'sm' | 'small' | 'lg' | 'large' | 'md' | 'medium' | '' | undefined
  icon?: string | InstanceType<typeof VIcon>['$props']
  onClick?: ($event: MouseEvent) => void
}

export type DsfrButtonGroupProps = {
  buttons?: (DsfrButtonProps & ButtonHTMLAttributes)[]
  reverse?: boolean
  equisized?: boolean
  iconRight?: boolean
  align?: 'right' | 'center' | '' | undefined
  inlineLayoutWhen?: 'always' | 'never' | 'sm' | 'small' | 'lg' | 'large' | 'md' | 'medium' | '' | true | undefined
  size?: 'sm' | 'small' | 'lg' | 'large' | 'md' | 'medium' | undefined
}
