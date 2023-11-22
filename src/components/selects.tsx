import { FC, FormEventHandler } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface Props {
  placeholder?: string;
  className?: string;
  options: string[];
  onChange?: FormEventHandler<HTMLSpanElement> | undefined;
}

const Selects: FC<Props> = ({ options, className, placeholder, onChange }) => {
  return (
    <Select>
      <SelectTrigger className={cn(className)}>
        <SelectValue placeholder={placeholder} onChange={onChange} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((val) => (
            <SelectItem
              key={val}
              value={val.toLowerCase()}
              className="capitalize"
            >
              {val.toLowerCase()}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Selects;
