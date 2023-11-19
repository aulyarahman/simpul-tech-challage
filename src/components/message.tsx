import { FC } from "react";
import { Icon } from ".";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

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
    <section className="mb-2">
      <div
        onClick={oncLick}
        className="flex space-x-7 mb-5 cursor-pointer hover:bg-gray-100 rounded-md hover:animate-in hover:fade-in-80"
      >
        <Icon.IconUsers />
        <div>
          <section className="flex space-x-3">
            <p className="font-semibold text-blue-primary">{type}</p>
            <p className="text-xs font-semibold text-gray-900">{date}</p>
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
      <section
        className={cn(
          "flex w-full",
          !name && "justify-end",
          name && "space-x-1"
        )}
      >
        {!name && <OnDots />}
        <section
          className={cn(
            "rounded-lg p-[10px] space-y-2",
            name ? "bg-yellow-10" : "bg-pink"
          )}
        >
          <p className="text-gray-primary-300">{message}</p>
          <p className="text-gray-primary-300 text-xs">{time}</p>
        </section>
        {name && <OnDots />}
      </section>
    </div>
  );
};

const OnDots: FC<{ onClick?: () => void }> = ({ onClick }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <div className="h-5 w-5 cursor-pointer" onClick={onClick}>
        <span className="sr-only">Open menu</span>
        <MoreHorizontal className="h-4 w-4" />
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem>
        <p className="text-blue-primary">Edit</p>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <p className="text-red-600">Delete</p>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
