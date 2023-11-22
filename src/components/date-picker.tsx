import { FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { formatDate } from "@/lib/format-time";

interface Props {
  setDate: (v?: Date) => void;
  date?: Date;
}

export const DatePicker: FC<Props> = ({ setDate, date }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "ml-2 h-[40px] text-sm w-[200px] justify-between bg-white text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {date ? (
            <span>{formatDate(date.toISOString())}</span>
          ) : (
            <span>{formatDate(new Date().toISOString())}</span>
          )}
          <CalendarIcon className="h-4 w-4 text-gray-600" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" side="bottom">
        <Calendar
          initialFocus
          mode="single"
          selected={date}
          onSelect={(e) => {
            setDate(e);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};
