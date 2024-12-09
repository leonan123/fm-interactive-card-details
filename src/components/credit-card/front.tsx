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
        'aspect-video w-[min(65vw,447px)] min-w-[264px] select-none rounded-xl bg-[url(./bg-card-front.png)] bg-cover bg-no-repeat px-6 py-5 shadow-lg max-lg:w-[min(65vw,350px)]',
        className,
      )}
    >
      <img src="./bg-card-front.png" alt="" className="hidden" />

      <div className="flex size-full flex-col justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-white"></div>
          <div className="size-4 rounded-full border border-white bg-transparent"></div>
        </div>

        <div className="space-y-4 text-white">
          <p className="tracking-wider lg:text-3xl">{cardNumber}</p>

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
