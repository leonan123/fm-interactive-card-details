import { FormProvider, useForm } from 'react-hook-form'
import * as CreditCard from './components/credit-card'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreditCardForm } from './components/credit-card-form'

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
            <CreditCardForm />
          </div>
        </>
      </FormProvider>
    </main>
  )
}
