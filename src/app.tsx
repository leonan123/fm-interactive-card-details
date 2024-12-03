import * as CreditCard from './components/credit-card'
import { Input } from './components/input'
import { Label } from './components/label'

export function App() {
  return (
    <main className="flex min-h-screen">
      <div className="relative w-1/3 bg-[url(./images/bg-main-desktop.png)] bg-cover bg-center bg-no-repeat">
        <div className="absolute -right-28 top-1/2 flex -translate-y-1/2 flex-col gap-5">
          <CreditCard.Front className="shadow-lg" />
          <CreditCard.Back className="translate-x-24 shadow-lg" />
        </div>
      </div>

      <div className="flex w-2/3 items-center justify-center">
        <form action="" className="max-w-[480px] space-y-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="cardholderName">CARDHOLDER NAME</Label>
            <Input
              type="text"
              name="cardholderName"
              id="cardholderName"
              placeholder="e.g. Jane Appleseed"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="cardNumber">CARD NUMBER</Label>
            <Input
              type="text"
              name="cardNumber"
              id="cardNumber"
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </div>

          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-1">
              <Label htmlFor="expDateMonth">EXP. DATE (MM/YY)</Label>
              <div className="flex w-full gap-2">
                <Input
                  type="number"
                  name="expDateMonth"
                  id="expDateMonth"
                  placeholder="MM"
                  className="w-1/2"
                  maxLength={2}
                />

                <Input
                  type="number"
                  name="expDateYear"
                  id="expDateYear"
                  placeholder="YY"
                  className="w-1/2"
                  maxLength={2}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="cvc">CVC</Label>
              <Input type="number" name="cvc" id="cvc" placeholder="e.g. 123" />
            </div>
          </div>

          <div>
            <button className="bg-very-dark-violet mt-3 h-14 w-full rounded-lg text-white">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
