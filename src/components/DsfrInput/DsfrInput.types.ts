export type DsfrInputProps = {
  id?: string
  descriptionId?: string
  hint?: string
  isTextarea?: boolean
  isWithWrapper?: boolean
  labelVisible?: boolean
  label?: string
  labelClass?: string
  modelValue?: string | number | null
  rules?: any
  valid?: boolean
  message?: string
  wrapperClass?: string
}

export type DsfrInputGroupProps = {
  descriptionId?: string
  hint?: string
  labelVisible?: boolean
  label?: string
  labelClass?: string
  modelValue?: string | number | null
  placeholder?: string
  validMessage?: string
  rules?: any
  valid?: boolean
  wrapperClass?: string
}
