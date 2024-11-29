import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type CreditCardFrontProps = ComponentProps<"div">;

export function CreditCardFront({ className }: CreditCardFrontProps) {
  return (
    <div
      className={twMerge(
        "bg-[url(./bg-card-front.png)] w-[447px] h-[245px] px-6 py-4 rounded-xl",
        className
      )}
    >
      <div className="size-full flex flex-col justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-white rounded-full"></div>
          <div className="size-4 border border-white bg-transparent rounded-full"></div>
        </div>

        <div className="text-white space-y-3">
          <p className="text-xl">0000 0000 0000 0000</p>

          <div className="flex items-center justify-between text-xs">
            <span>JANE APPLESEED</span>
            <span>00/00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
