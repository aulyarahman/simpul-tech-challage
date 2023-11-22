import React, { FC } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BookMarkIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export interface PropsTaskItem {
  name: string;
  color: string;
}

const itemLists: PropsTaskItem[] = [
  {
    name: "Important ASAP",
    color: "#E5F1FF",
  },
  {
    name: "Offline Meeting",
    color: "#FDCFA4",
  },
  {
    name: "Virtual Meeting",
    color: "#F9E9C3",
  },
  {
    name: "ASAP",
    color: "#AFEBDB",
  },
  {
    name: "Client Related",
    color: "#CBF1C2",
  },
  {
    name: "Self Task",
    color: "#CFCEF9",
  },
  {
    name: "Appointments",
    color: "#F9E0FD",
  },
  {
    name: "Court Related",
    color: "#9DD0ED",
  },
];

const TaskItems: FC<{ onSelect: (v: PropsTaskItem) => void }> = ({
  onSelect,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button>
          <BookMarkIcon />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[277px] p-2" side="bottom">
        {itemLists.map((it, idx) => (
          <div
            key={idx}
            className={cn(
              `px-2 py-2 mb-[0.5rem] rounded-md text-sm font-semibold cursor-pointer`
            )}
            style={{
              backgroundColor: it.color,
            }}
            onClick={() => onSelect(it)}
          >
            {it.name}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default TaskItems;
