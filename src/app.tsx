import { FormProvider, useForm } from 'react-hook-form'
import * as CreditCard from './components/credit-card'
import { Input } from './components/input'
import { Label } from './components/label'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formCreditCardSchema = z.object({
  cardholderName: z.string().min(1, { message: "Can't be blank" }),
  cardNumber: z
    .string()
    .min(1, { message: "Can't be blank" })
    .regex(/^\d[\d\s]*$/, { message: 'Wrong format, only numbers' }),
  expDateMonth: z.coerce.number().min(1, { message: "Can't be blank" }),
  expDateYear: z.coerce.number().min(1, { message: "Can't be blank" }),
  cvc: z.coerce.number().min(1, { message: "Can't be blank" }),
})

export type FormCreditCardSchema = z.infer<typeof formCreditCardSchema>

export function App() {
  const formMethods = useForm<FormCreditCardSchema>({
    resolver: zodResolver(formCreditCardSchema),
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = formMethods

  function onSubmit(data: FormCreditCardSchema) {
    console.log(data)
  }

  return (
    <main className="flex min-h-screen">
      <FormProvider {...formMethods}>
        <>
          <div className="relative w-1/3 bg-[url(./images/bg-main-desktop.png)] bg-cover bg-center bg-no-repeat">
            <div className="absolute -right-28 top-1/2 flex -translate-y-1/2 flex-col gap-5">
              <CreditCard.Front className="shadow-lg" />
              <CreditCard.Back className="translate-x-24 shadow-lg" />
            </div>
          </div>

          <div className="flex w-2/3 items-center justify-center">
            <form
              className="max-w-[480px] space-y-4"
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
                  {...register('cardNumber')}
                />

                {errors.cardNumber && (
                  <span className="text-sm font-medium text-red-500">
                    {errors.cardNumber.message}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-5">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="expDateMonth">EXP. DATE (MM/YY)</Label>
                  <div className="flex w-full gap-2">
                    <Input
                      inputMode="numeric"
                      maxLength={2}
                      placeholder="MM"
                      id="expDateMonth"
                      className="w-1/2"
                      {...register('expDateMonth')}
                    />

                    <Input
                      inputMode="numeric"
                      maxLength={2}
                      placeholder="YY"
                      id="expDateYear"
                      className="w-1/2"
                      {...register('expDateYear')}
                    />
                  </div>

                  {errors.expDateMonth || errors.expDateYear ? (
                    <span className="text-sm font-medium text-red-500">
                      {errors.expDateMonth?.message ||
                        errors.expDateYear?.message}
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
          </div>
        </>
      </FormProvider>
    </main>
  )
}
