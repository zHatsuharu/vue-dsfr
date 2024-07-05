import type { DsfrButtonProps } from '../DsfrButton/DsfrButton.types'

export type DsfrModalProps = {
  modalId?: string
  opened?: boolean
  actions?: DsfrButtonProps[]
  isAlert?: boolean
  origin?: { focus: () => void }
  title: string
  icon?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  closeButtonLabel?: string
  closeButtonTitle?: string
  closeButtonDisplay?: boolean
}
