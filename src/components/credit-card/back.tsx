import type { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import type { FormCreditCardSchema } from '../../app'

type CreditCardBackProps = ComponentProps<'div'>

export function CreditCardBack({ className }: CreditCardBackProps) {
  const { watch } = useFormContext<FormCreditCardSchema>()

  const cvv = watch('cvc') || '000'

  return (
    <div
      className={twMerge(
        'relative w-[min(65vw,447px)] min-w-[264px] rounded-xl max-lg:w-[min(65vw,350px)]',
        className,
      )}
    >
      <img src="./bg-card-back.png" alt="" className="size-full" />

      <span className="absolute right-12 top-[calc(50%-0.125rem)] -translate-x-1/2 -translate-y-1/2 select-none text-base tracking-wider text-white">
        {cvv}
      </span>
    </div>
  )
}
