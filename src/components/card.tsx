import { FC, Fragment, ReactNode } from "react";
import { Icon } from ".";
import { cn } from "@/lib/utils";

interface Props {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

export const Card: FC<Props> = ({ isOpen, children, className }) => {
  return (
    <Fragment>
      {isOpen && (
        <div
          className={cn(
            " bg-white rounded-md w-[534px] h-[537px]",
            isOpen
              ? "animate-in slide-in-from-bottom-10"
              : "animate-out slide-out-to-top-10",
            className
          )}
        >
          <section className="min-h-[437px] max-h-[437px] overflow-auto">
            {children}
          </section>
        </div>
      )}
    </Fragment>
  );
};
