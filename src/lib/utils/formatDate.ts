function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);

  const dayOfWeek = new Intl.DateTimeFormat("ru-RU", {
    weekday: "short",
  }).format(date);

  return `${formattedDate}, ${dayOfWeek}`;
}

export default formatDate;
