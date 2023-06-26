import React from 'react'

interface Props {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  type?: 'text' | 'email' | 'password',
  className?: string,
  placeholder?: string,
  disabled?: boolean,
  minLength?: number,
  maxLength?: number
}

const InputText = ({ type, value, onChange, className, placeholder, disabled, minLength, maxLength }: Props) => {
  return (
    <input type={type ?? 'text'} value={value} onChange={(e) => onChange(e)} className={`rounded-lg ring-0 border-primary font-normal ${className}`} placeholder={placeholder} disabled={disabled} minLength={minLength} maxLength={maxLength}/>
  )
}

export default InputText