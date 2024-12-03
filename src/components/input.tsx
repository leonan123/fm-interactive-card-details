import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge(
        'text-very-dark-violet border-light-grayish-violet focus:border-very-dark-violet relative h-12 appearance-none rounded-lg border px-4 outline-none transition-colors',
        className,
      )}
      {...props}
    />
  )
}
