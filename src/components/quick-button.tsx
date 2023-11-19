"use client";
import { FC, Fragment, FunctionComponent, useContext } from "react";
import { ButtonIcon, Icon, TColors } from ".";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { RootCtx } from "./provider";

// define type for quick button
type TypeShow = "Task" | "Inbox";
type TList = {
  title: TypeShow;
  icon: FunctionComponent;
};

// define list of items for quick button when click
const items: Record<TypeShow, FunctionComponent> = {
  Task: () => <Icon.BookIcon color="#F8B76B" />,
  Inbox: () => <Icon.MessageIcon color="#8885FF" />,
};

export const QuickButton = () => {
  const { typeShow, setTypeShow } = useContext(RootCtx);
  const tpShow = typeShow === "Inbox" ? "Task" : "Inbox";

  return (
    <section className="absolute bottom-4 right-3">
      {typeShow && (
        <div className="flex space-x-3 inset-y-0 end-3 animate-in slide-in-from-left-14">
          <CardQuick
            onClick={() => undefined}
            title={tpShow}
            icon={items[tpShow]}
          />
          <CardActive
            color={typeShow === "Inbox" ? "purple" : "yellow"}
            icon={typeShow === "Inbox" ? Icon.MessageIcon : Icon.BookIcon}
          />
        </div>
      )}
      <Popover>
        <PopoverTrigger
          className={cn(typeShow && "hidden animate-out fade-out")}
        >
          <ButtonIcon icon={Icon.ThunderIcon} color="primary" />
        </PopoverTrigger>

        <PopoverContent
          className={cn(
            "flex space-x-4 bg-transparent border-0 shadow-none w-fit",
            typeShow && "hidden animate-out slide-out-to-bottom-14"
          )}
        >
          <Fragment>
            {Object.keys(items).map((el, idx) => {
              const elType = el as TypeShow;
              const icon = items[elType];
              return (
                <CardQuick
                  key={idx}
                  icon={icon}
                  title={elType}
                  onClick={() => setTypeShow(elType)}
                />
              );
            })}
          </Fragment>
        </PopoverContent>
      </Popover>
    </section>
  );
};

const CardQuick: FC<TList & { onClick?: () => void; className?: string }> = ({
  icon,
  title,
  onClick,
  className,
}) => (
  <div className={cn("flex flex-col items-center", className)}>
    <p className="text-gray-100 text-xs text-center absolute -mt-5">{title}</p>
    <ButtonIcon icon={icon} onClick={onClick} />
  </div>
);

const CardActive: FC<{ icon: FunctionComponent; color?: TColors }> = ({
  icon,
  color,
}) => (
  <div className="flex space-x-4">
    <div className="absolute w-14 h-14 rounded-full bg-gray-500" />
    <ButtonIcon icon={icon} color={color} className="z-[999]" />
  </div>
);
