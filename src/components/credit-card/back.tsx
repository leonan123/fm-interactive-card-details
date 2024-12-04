import type { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import type { FormCreditCardSchema } from '../../app'

type CreditCardBackProps = ComponentProps<'div'>

export function CreditCardBack({ className }: CreditCardBackProps) {
  const { watch } = useFormContext<FormCreditCardSchema>()

  const cvv = watch('cvc') || '000'

  return (
    <div className={twMerge('relative rounded-xl', className)}>
      <img src="./bg-card-back.png" alt="" />

      <span className="absolute right-11 top-[calc(50%-0.125rem)] -translate-x-1/2 -translate-y-1/2 tracking-wider text-white">
        {cvv}
      </span>
    </div>
  )
}
