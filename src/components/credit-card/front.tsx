import type { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import type { FormCreditCardSchema } from '../../app'
import { formatCardNumber } from '../../helpers/format-card-number'

type CreditCardFrontProps = ComponentProps<'div'>

export function CreditCardFront({ className }: CreditCardFrontProps) {
  const { watch } = useFormContext<FormCreditCardSchema>()

  const cardholderName = watch('cardholderName') || 'JANE APPLESEED'
  const cardNumber =
    formatCardNumber(watch('cardNumber')) || '0000 0000 0000 0000'
  const expDateMonth = watch('expDateMonth') || '00'
  const expDateYear = watch('expDateYear') || '00'

  return (
    <div
      className={twMerge(
        'h-[245px] w-[447px] rounded-xl bg-[url(./bg-card-front.png)] px-6 py-5',
        className,
      )}
    >
      <div className="flex size-full flex-col justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-white"></div>
          <div className="size-4 rounded-full border border-white bg-transparent"></div>
        </div>

        <div className="space-y-4 text-white">
          <p className="text-3xl tracking-wider">{cardNumber}</p>

          <div className="flex items-center justify-between text-xs">
            <span>{cardholderName.toUpperCase()}</span>
            <span>
              {expDateMonth}/{expDateYear}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
