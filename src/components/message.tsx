import { FC } from "react";
import { Icon } from ".";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  date: string;
  message: string;
  type: string;
  oncLick?: () => void;
}

export const ItemMessage: FC<Props> = ({
  date,
  message,
  name,
  type,
  oncLick,
}) => {
  return (
    <section onClick={oncLick}>
      <div className="flex space-x-7 mb-2 cursor-pointer hover:bg-gray-100 rounded-md hover:animate-in hover:fade-in-80">
        <Icon.IconUsers />
        <div>
          <section className="flex space-x-3 items-center">
            <h3 className="font-semibold text-blue-primary">{type}</h3>
            <p className="text-xs text-gray-900">{date}</p>
          </section>
          <p className="font-bold">{name} :</p>
          <p className="">
            {message.length > 100
              ? message.substring(0, 100) + " ..."
              : message}
          </p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300" />
    </section>
  );
};

interface ItemChatProps {
  message: string;
  time: string;
  name?: string;
}

export const ItemChat: FC<ItemChatProps> = ({ message, time, name }) => {
  return (
    <div className="">
      <p
        className={cn(
          "text-sm font-bold",
          name ? "text-left text-yellow" : "text-right text-purple"
        )}
      >
        {name ?? "You"}
      </p>
      <section className={cn("flex w-full", !name && "justify-end")}>
        {!name && (
          <div className="w-7 h-7 cursor-pointer">
            <Icon.DotIcon />
          </div>
        )}
        <section
          className={cn(
            "rounded-lg p-[10px] space-y-2",
            name ? "bg-yellow-10" : "bg-pink"
          )}
        >
          <p className="text-gray-primary-300">{message}</p>
          <p className="text-gray-primary-300 text-xs">{time}</p>
        </section>
        {name && (
          <div className="w-7 h-7 cursor-pointer">
            <Icon.DotIcon />
          </div>
        )}
      </section>
    </div>
  );
};
