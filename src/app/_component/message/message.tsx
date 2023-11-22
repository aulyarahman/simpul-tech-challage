import { FC, useContext } from "react";
import { Icon, OnActions } from "@/components";
import { cn } from "@/lib/utils";
import { PopupCtx } from "@/app/card-popup";

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
        className="flex w-full space-x-7 mb-5 cursor-pointer hover:bg-gray-100 rounded-md hover:animate-in hover:fade-in-80"
      >
        <div className="pt-1">
          <Icon.IconUsers />
        </div>

        <div>
          <section className="flex space-x-3">
            <p className="font-semibold text-lg leading-none text-blue-primary">
              {type}
            </p>
            <p className="text-sm font-semibold text-gray-700">{date}</p>
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
  onDelete?: () => void;
}

export const ItemChat: FC<ItemChatProps> = ({
  message,
  time,
  name,
  onDelete,
}) => {
  const { setOnReplyMessage } = useContext(PopupCtx);

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
        {!name && (
          <OnActions
            onDelete={onDelete}
            onEdit={() => undefined}
            isOwn={true}
          />
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
          <OnActions
            onDelete={() => setOnReplyMessage({ authorMessage: name, message })}
            onEdit={() => undefined}
          />
        )}
      </section>
    </div>
  );
};
