export const baseUrl = import.meta.env.VITE_API_BASE_URL

export function daysBetween(start: number, end: number) {
  // The number of milliseconds in one day
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const startDate = new Date(start)
  const endDate = new Date(end)

  // Convert both dates to UTC midnight to ignore time components and DST issues
  const startUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const endUTC = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(startUTC - endUTC);

  // Convert back to days and return
  return Math.floor(differenceMs / oneDayInMs);
}