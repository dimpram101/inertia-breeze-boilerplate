import { Link } from '@inertiajs/react'
import React from 'react'

interface Props {
  label: string,
  href: string,
  as?: string,
  method?: 'get' | 'post' | 'put' | 'delete',
  className?: string
  disabled?: boolean
}

const LinkButton = ({ label, href, method, className, disabled } : Props) => {
  return (
    <Link href={href} method={method} disabled={disabled} className={`px-4 py-2 rounded-lg bg-primary text-complementary hover:bg-secondary ${className}`}>{label}</Link>
  )
}

export default LinkButton