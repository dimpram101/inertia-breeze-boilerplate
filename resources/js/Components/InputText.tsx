import React from 'react'

interface Props {
  value: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  type?: 'text' | 'email' | 'password',
  className?: string,
  placeholder?: string,
  disabled?: boolean,
  required?: boolean
  minLength?: number,
  maxLength?: number
}

const InputText = ({ type, value, onChange, className, placeholder, disabled, minLength, maxLength, required }: Props) => {
  return (
    <input type={type ?? 'text'} value={value} onChange={onChange ? (e) => onChange(e) : undefined} className={`rounded-lg ring-0 border-primary font-normal ${className}`} placeholder={placeholder} disabled={disabled} minLength={minLength} maxLength={maxLength} required={required}/>
  )
}

export default InputText