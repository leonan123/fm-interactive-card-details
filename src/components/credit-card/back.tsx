import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type CreditCardBackProps = ComponentProps<"div">;

export function CreditCardBack({ className }: CreditCardBackProps) {
  return (
    <div
      className={twMerge(
        "bg-[url(./bg-card-back.png)] w-[447px] h-[245px] px-6 py-4 rounded-xl",
        className
      )}
    ></div>
  );
}
