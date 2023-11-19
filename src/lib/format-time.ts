import { format, isToday } from "date-fns";

export const formatDate = (value: string) => {
  const date = new Date(value);
  return format(date, "dd/mm/yyyy, HH:mm");
};

export const formatDateInRoomChat = (
  value: string | number
): { isToday: boolean; date: string } => {
  const originalDate = new Date(value);
  const formattedDate = isToday(originalDate)
    ? `Today ${format(originalDate, "MMMM dd, yyyy")}`
    : format(originalDate, "MMMM dd, yyyy");

  return {
    date: formattedDate,
    isToday: isToday(originalDate),
  };
};

export const formatTime = (value: string | number) =>
  format(new Date(value), "HH:mm");
