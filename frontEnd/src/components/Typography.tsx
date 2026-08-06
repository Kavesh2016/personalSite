import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { cn } from '@/lib/utils'

// Factory that returns a typography component with preset classes; `as` picks the rendered tag.
function styled<T extends ElementType = 'span'>(classes: string, as?: T) {
  const Component = (as ?? 'span') as ElementType

  const Styled = ({ className, ...props }: ComponentPropsWithoutRef<T>) => (
    <Component className={cn(classes, className)} {...props} />
  )
  Styled.displayName = `Styled(${typeof Component === 'string' ? Component : 'Component'})`
  return Styled
}

export const PageHeading = styled('mb-6 text-3xl font-bold tracking-tight', 'h1')
