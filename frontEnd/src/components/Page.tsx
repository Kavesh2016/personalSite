import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PageProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

// Centers content and applies consistent left/right margins so the navbar and page content line up.
export function Page({ children, className, as: Component = 'main' }: PageProps) {
  return (
    <Component className={cn('mx-auto max-w-6xl px-8 py-8', className)}>
      {children}
    </Component>
  )
}
