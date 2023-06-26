import React from 'react'

interface Props {
  children?: React.ReactNode,
  onClick?: () => void,
  disabled?: boolean,
  className?: string,
  type?: 'button' | 'submit',
}

const Button = ({children, onClick, disabled, className, type} : Props) => {
  return (
    <button type={type ?? 'button'} onClick={onClick} disabled={disabled} className={`px-4 py-2 bg-primary text-complementary rounded-lg hover:bg-secondary transition-color duration-150 disabled:cursor-not-allowed ${className}`}>{children}</button>
  )
}

export default Button