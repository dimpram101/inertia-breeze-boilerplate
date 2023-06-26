import { Link } from '@inertiajs/react'
import React from 'react'

interface Props {
  children?: React.ReactNode,
  href: string,
  as?: string,
  method?: 'get' | 'post' | 'put' | 'delete',
  className?: string
  disabled?: boolean
}

const LinkButton = ({ children, href, method, className, disabled, as } : Props) => {
  return (
    <Link href={href} method={method} disabled={disabled} as={as}  className={`px-4 py-2 rounded-lg bg-primary text-complementary hover:bg-secondary ${className}`}>{children}</Link>
  )
}

export default LinkButton