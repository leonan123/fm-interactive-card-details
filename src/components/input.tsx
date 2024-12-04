import type { ComponentProps } from 'react'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'> & {
  invalid?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, ...props }, ref) => {
    return (
      <input
        className={twMerge(
          'relative h-12 appearance-none rounded-lg border border-light-grayish-violet px-4 text-very-dark-violet outline-none transition-colors focus:border-very-dark-violet',
          invalid && 'border-error',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
