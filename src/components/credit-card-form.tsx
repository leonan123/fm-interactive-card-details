import { useFormContext } from 'react-hook-form'
import type { FormCreditCardSchema } from '../app'
import { Input } from './input'
import { Label } from './label'
import { formatCardNumber } from '../helpers/format-card-number'

interface CreditCardFormProps {
  onSubmit: (data: FormCreditCardSchema) => void
}

export function CreditCardForm({ onSubmit }: CreditCardFormProps) {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useFormContext<FormCreditCardSchema>()

  const cardNumber = formatCardNumber(watch('cardNumber')) || ''

  return (
    <form
      className="max-w-[470px] space-y-6 px-4 pb-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1">
        <Label htmlFor="cardholderName">CARDHOLDER NAME</Label>

        <Input
          type="text"
          placeholder="e.g. Jane Appleseed"
          id="cardholderName"
          invalid={!!errors.cardholderName}
          {...register('cardholderName')}
        />

        {errors.cardholderName && (
          <span className="text-sm font-medium text-red-500">
            {errors.cardholderName.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="cardNumber">CARD NUMBER</Label>

        <Input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength={19}
          id="cardNumber"
          invalid={!!errors.cardNumber}
          value={cardNumber}
          {...register('cardNumber')}
        />

        {errors.cardNumber && (
          <span className="text-sm font-medium text-red-500">
            {errors.cardNumber.message}
          </span>
        )}
      </div>

      <div className="flex flex-col items-baseline gap-5 xs:flex-row">
        <div className="flex flex-col gap-1">
          <Label htmlFor="expDateMonth">EXP. DATE (MM/YY)</Label>

          <div className="flex gap-2">
            <Input
              inputMode="numeric"
              maxLength={2}
              placeholder="MM"
              id="expDateMonth"
              className="w-1/2"
              invalid={!!errors.expDateMonth}
              {...register('expDateMonth')}
            />

            <Input
              inputMode="numeric"
              maxLength={2}
              placeholder="YY"
              id="expDateYear"
              className="w-1/2"
              invalid={!!errors.expDateYear}
              {...register('expDateYear')}
            />
          </div>

          {errors.expDateMonth || errors.expDateYear ? (
            <span className="text-sm font-medium text-red-500">
              {errors.expDateMonth?.message || errors.expDateYear?.message}
            </span>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-1 xs:w-1/2">
          <Label htmlFor="cvc">CVC</Label>

          <Input
            inputMode="numeric"
            maxLength={3}
            placeholder="e.g. 123"
            id="cvc"
            invalid={!!errors.cvc}
            {...register('cvc')}
          />

          {errors.cvc && (
            <span className="text-sm font-medium text-red-500">
              {errors.cvc.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <button className="mt-4 h-12 w-full rounded-lg bg-very-dark-violet text-white transition-opacity hover:opacity-95">
          Confirm
        </button>
      </div>
    </form>
  )
}
