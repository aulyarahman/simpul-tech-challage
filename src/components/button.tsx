import { FC, ButtonHTMLAttributes, FunctionComponent } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

enum EColor {
  "primary" = "bg-blue-primary hover:bg-blue-700",
  "gray" = "bg-gray-primary hover:bg-gray-400",
  "gray-100" = "bg-gray-primary-100 hover:bg-gray-400",
  "gray-200" = "bg-gray-primary-200 hover:bg-gray-400",
  "purple" = "bg-purple hover:bg-purple-400",
  "yellow" = "bg-yellow hover:bg-yellow-400",
}

export type TColors = keyof typeof EColor;

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: TColors;
};

export const Button: FC<Props> = (props) => {
  const { children, className, color, ...rest } = props;
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors text-white bg-[#2F80ED] hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-3",
        className,
        color && EColor[color || "primary"]
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

type ButtonProps = Props & {
  icon: FunctionComponent;
};

export const ButtonIcon: FC<ButtonProps> = ({
  icon: Icon,
  className,
  ...rest
}) => (
  <Button
    className={cn(
      "rounded-full w-14 h-14 bg-white hover:bg-gray-300",
      className
    )}
    {...rest}
  >
    <Icon />
  </Button>
);

interface OnActionsProps {
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  isOwn?: boolean;
}

export const OnActions: FC<OnActionsProps> = ({
  onClick,
  onDelete,
  onEdit,
  isOwn,
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <div className="h-5 w-5 cursor-pointer" onClick={onClick}>
        <span className="sr-only">Open menu</span>
        <MoreHorizontal className="h-4 w-4" />
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      {onEdit && (
        <DropdownMenuItem onClick={onEdit}>
          <p className="text-blue-primary">{isOwn ? "Edit" : "Share"}</p>
        </DropdownMenuItem>
      )}
      {onDelete && (
        <DropdownMenuItem onClick={onDelete}>
          <p className={cn(isOwn ? "text-red-600" : "text-blue-primary")}>
            {isOwn ? "Delete" : "Reply"}
          </p>
        </DropdownMenuItem>
      )}
    </DropdownMenuContent>
  </DropdownMenu>
);
