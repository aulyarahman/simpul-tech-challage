import React, { FC } from "react";
import { Icon } from ".";
import { cn } from "@/lib/utils";

export const InputSearch: FC<{ className?: string }> = ({ className }) => {
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <Input className={className} id="search" />
        <div className="absolute inset-y-0 end-3 flex items-center pointer-events-none">
          <Icon.SearchIcon color="black" />
        </div>
      </div>
    </div>
  );
};

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<Props> = ({ className, ...rest }) => (
  <div className="mb-3">
    <input
      className={cn(
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
        className
      )}
      {...rest}
    />
  </div>
);
