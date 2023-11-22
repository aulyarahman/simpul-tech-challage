import { format, isToday } from "date-fns";

export const formatDate = (value: string, useTime?: boolean) => {
  const date = new Date(value);
  return useTime ? format(date, "dd/mm/yyyy, HH:mm") : format(date, "dd/mm/yyyy");
};

export const checkDayDue = (value: string): string => {
  const date = new Date(value);
  const today = new Date();
  const diffDays = Math.ceil(Math.abs(date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  const todays = isToday(date);
  if (!todays && diffDays > 0) {
    return `${diffDays} Day Left`;
  }

  return '';
}

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
