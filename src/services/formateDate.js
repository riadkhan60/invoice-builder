const dateTimeFormate = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  day: "numeric",
  month: "short",
});

export default function formateDate(date) {
  return dateTimeFormate.format(new Date(date));
}
