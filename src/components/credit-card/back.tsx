import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type CreditCardBackProps = ComponentProps<'div'>

export function CreditCardBack({ className }: CreditCardBackProps) {
  return (
    <div className={twMerge('relative rounded-xl', className)}>
      <img src="./bg-card-back.png" alt="" />

      <span className="absolute right-11 top-[calc(50%-0.125rem)] -translate-x-1/2 -translate-y-1/2 text-white">
        000
      </span>
    </div>
  )
}
