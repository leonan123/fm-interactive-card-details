import * as CreditCard from "./components/credit-card";

export function App() {
  return (
    <main className="flex min-h-screen">
      <div className="relative w-1/3 bg-[url(./images/bg-main-desktop.png)] bg-no-repeat bg-cover">
        <CreditCard.Front className="absolute top-36 -right-28 shadow-lg" />
        <CreditCard.Back className="absolute top-[420px] -right-52 shadow-lg" />
      </div>
      <div className="w-2/3"></div>
    </main>
  );
}
