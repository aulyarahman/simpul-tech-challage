"use client";
import { FC, useState } from "react";
import CheckBox from "@/components/checkbox";
import { Clock, Pencil, ArrowUp, ArrowDown } from "lucide-react";
import { checkDayDue, formatDate } from "@/lib/format-time";
import { DatePicker } from "@/components/date-picker";
import { OnActions, TextArea } from "@/components";
import { cn } from "@/lib/utils";
import TaskItems, { PropsTaskItem } from "./task-item";

const Icon: FC<{
  isOpen: boolean;
  onClick: () => void;
}> = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return isOpen ? (
    <ArrowUp
      onClick={onClick}
      className="w-4 h-4 cursor-pointer text-gray-600"
    />
  ) : (
    <ArrowDown
      onClick={onClick}
      className="w-4 h-4 cursor-pointer text-gray-600"
    />
  );
};

export const ItemTask: FC<{
  title: string;
  date: string;
  description?: string;
  onDelete?: () => void;
}> = ({ date, title, description, onDelete }) => {
  const [descriptionTask, setDescriptionTask] = useState<string | undefined>(
    description
  );
  const [onEditDescription, setOnEditDescription] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    date ? new Date(date) : undefined
  );
  const [selectedTask, setSelectedTask] = useState<PropsTaskItem[]>([]);
  const [isCollapse, setIsCollapse] = useState(true);
  const dayDue = checkDayDue("2023-10-05T14:48:00.000Z");

  return (
    <div className="flex flex-col mt-4">
      <section className="inline-flex justify-between">
        <CheckBox label={title} onChecked={(e) => console.log(e)} />
        <div className="inline-flex space-x-3">
          {dayDue && <p className="text-sm text-red-500">{dayDue}</p>}
          <p className="text-sm">{formatDate(date)}</p>
          <Icon
            isOpen={isCollapse}
            onClick={() => setIsCollapse(!isCollapse)}
          />
          <OnActions onDelete={onDelete} isOwn={true} />
        </div>
      </section>

      {isCollapse && (
        <div
          className={cn(
            "space-y-3 flex flex-col ml-9",
            isCollapse && "animate-in slide-in-from-top-10",
            !isCollapse && "animate-out slide-out-to-top-10"
          )}
        >
          <section className="inline-flex space-x-3 items-center">
            <Clock className={cn("w-5 h-5 text-blue-primary")} />
            <DatePicker date={selectedDate} setDate={setSelectedDate} />
          </section>

          <section className="inline-flex space-x-3 items-center">
            <Pencil
              className={cn("w-5 h-5 cursor-pointer text-blue-primary")}
              onClick={() => setOnEditDescription(!onEditDescription)}
            />
            {!onEditDescription ? (
              <p className="text-sm">{descriptionTask ?? "No Description"}</p>
            ) : (
              <TextArea
                onChange={(e) => setDescriptionTask(e.target.value)}
                value={descriptionTask}
              />
            )}
          </section>
          <section className="bg-gray-primary-50 items-center p-3 rounded-lg -ml-3 flex space-x-3">
            <TaskItems
              onSelect={(select) =>
                setSelectedTask((v) => {
                  if (v.find((it) => it.name === select.name)) {
                    return v.filter((it) => it.name !== select.name);
                  }
                  return [...v, select];
                })
              }
            />
            <div className="grid grid-cols-4 gap-2">
              {selectedTask.map((it, idx) => (
                <p
                  key={idx}
                  className={`font-bold h-[28px] text-xs rounded-md px-3 py-1 flex items-center justify-center `}
                  style={{
                    backgroundColor: it.color,
                  }}
                >
                  {it.name}
                </p>
              ))}
            </div>
          </section>
        </div>
      )}

      <div className={cn("w-full h-[1px] bg-gray-600 mt-[22px]")} />
    </div>
  );
};
