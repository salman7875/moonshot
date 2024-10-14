export const formatDate = (value) => {
  const date = new Date(value);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  const hour = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const time = hour >= 12 ? "pm" : "am";

  return `${day}/${month}/${year} ${hour}:${minutes}${time}`;
};
