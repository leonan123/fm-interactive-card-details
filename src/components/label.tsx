import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type LabelProps = ComponentProps<'label'>

export function Label({ children, className, ...props }: LabelProps) {
  return (
    <label
      className={twMerge(
        'text-very-dark-violet font-medium uppercase tracking-wider',
        className,
      )}
      {...props}
    >
      {children}
    </label>
  )
}
