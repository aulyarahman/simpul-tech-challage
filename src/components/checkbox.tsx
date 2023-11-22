import { FC, InputHTMLAttributes, useState } from "react";
import { Input } from ".";
import { cn } from "@/lib/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onChangeInput?: (v: string) => void;
  onChecked?: (v: boolean) => void;
}

const CheckBox: FC<Props> = ({
  label,
  className,
  onChangeInput,
  onChecked,
  ...rest
}) => {
  const [onCehck, setOnCheck] = useState(false);

  return (
    <div className="flex items-center mb-4">
      <input
        id="checkbox"
        type="checkbox"
        className="w-4 h-4 bg-gray-100 text-white border-gray-300 rounded"
        onChange={(e) => {
          setOnCheck(e.target.checked);
          onChecked && onChecked(e.target.checked);
        }}
        {...rest}
      />
      <div>
        {label ? (
          <label
            htmlFor="checkbox"
            className={cn(
              "ms-6 text-sm font-bold text-gray-900 dark:text-gray-300",
              onCehck && "line-through text-gray-500"
            )}
          >
            {label}
          </label>
        ) : (
          <Input
            placeholder="Type Task Title"
            className="ms-6 text-sm text-gray-900 p-2"
            onChange={(e) => onChangeInput && onChangeInput(e.target.value)}
          />
        )}
      </div>
    </div>
  );
};

export default CheckBox;
