import { useFormContext } from 'react-hook-form'
import type { FormCreditCardSchema } from '../app'
import { Input } from './input'
import { Label } from './label'

export function CreditCardForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useFormContext<FormCreditCardSchema>()

  function onSubmit(data: FormCreditCardSchema) {
    console.log(data)
  }

  return (
    <form className="max-w-[480px] space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
          {...register('cardNumber')}
        />

        {errors.cardNumber && (
          <span className="text-sm font-medium text-red-500">
            {errors.cardNumber.message}
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-5">
        <div className="flex flex-col gap-1">
          <Label htmlFor="expDateMonth">EXP. DATE (MM/YY)</Label>
          <div className="flex w-full gap-2">
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

        <div className="flex flex-col gap-1">
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
        <button className="mt-3 h-14 w-full rounded-lg bg-very-dark-violet text-white transition-opacity hover:opacity-95">
          Confirm
        </button>
      </div>
    </form>
  )
}
