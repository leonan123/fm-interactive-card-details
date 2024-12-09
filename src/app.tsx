import { FormProvider, useForm } from 'react-hook-form'
import * as CreditCard from './components/credit-card'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreditCardForm } from './components/credit-card-form'
import { useState } from 'react'
import { CheckIcon } from 'lucide-react'

const formCreditCardSchema = z
  .object({
    cardholderName: z.string().min(1, { message: "Can't be blank" }),
    cardNumber: z
      .string()
      .min(1, { message: "Can't be blank" })
      .regex(/^\d[\d\s]*$/, { message: 'Wrong format, only numbers' }),
    expDateMonth: z.coerce.number().min(1, { message: "Can't be blank" }),
    expDateYear: z.coerce.number().min(1, { message: "Can't be blank" }),
    cvc: z.coerce.number().min(1, { message: "Can't be blank" }),
  })
  .transform((data) => ({
    ...data,
    cardNumber: data.cardNumber.replace(/\D/g, ''),
    cvc: data.cvc.toString().padStart(3, '0'),
  }))

export type FormCreditCardSchema = z.infer<typeof formCreditCardSchema>

export function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)

  const formMethods = useForm<FormCreditCardSchema>({
    resolver: zodResolver(formCreditCardSchema),
  })

  function handleFormSubmit() {
    setIsFormSubmitted(true)
  }

  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      <FormProvider {...formMethods}>
        <>
          <div className="relative h-[20vh] w-full bg-[url(./images/bg-main-desktop.png)] bg-cover bg-center bg-no-repeat sm:h-[25dvh] lg:h-screen lg:w-1/3">
            <div className="absolute right-[calc(50%+2.25rem/2)] top-1/2 flex -translate-y-1/2 translate-x-1/2 flex-col-reverse gap-5 lg:-right-28 lg:translate-x-0 lg:flex-col">
              <CreditCard.Front className="z-10 shadow-lg lg:z-0" />
              <CreditCard.Back className="translate-x-9 translate-y-20 shadow-lg lg:translate-x-14 lg:translate-y-0" />
            </div>
          </div>

          <div className="mt-20 flex w-full items-center justify-center sm:mt-28 lg:mt-0 lg:w-2/3 lg:justify-end xl:justify-center">
            {isFormSubmitted === false ? (
              <CreditCardForm onSubmit={handleFormSubmit} />
            ) : (
              <div className="flex w-full max-w-[400px] flex-col items-center space-y-7 text-very-dark-violet">
                <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[hsla(249,99%,64%,1)] to-[hsla(278,94%,30%,1)]">
                  <CheckIcon className="size-7 text-white" />
                </div>

                <div className="space-y-0.5 text-center">
                  <h1 className="text-4xl font-bold tracking-wider">
                    THANK YOU!
                  </h1>
                  <p className="text-very-dark-violet/60">
                    We've added your card details
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-4 h-12 w-full rounded-lg bg-very-dark-violet text-white transition-opacity hover:opacity-95"
                  onClick={() => setIsFormSubmitted(false)}
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </>
      </FormProvider>
    </main>
  )
}
