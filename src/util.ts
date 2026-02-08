export const baseUrl = import.meta.env.VITE_API_BASE_URL

export function daysBetween(startDate: Date, endDate: Date) {
  // The number of milliseconds in one day
  const oneDayInMs = 1000 * 60 * 60 * 24;

  // Convert both dates to UTC midnight to ignore time components and DST issues
  const startUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const endUTC = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(startUTC - endUTC);

  // Convert back to days and return
  return Math.floor(differenceMs / oneDayInMs);
}

export function secondsBetween(startDate: Date, endDate: Date) {

  const timeDifferenceMs = endDate.getTime() - startDate.getTime(); 
  const timeDifferenceSeconds = timeDifferenceMs / 1000;
  const totalSeconds = Math.floor(timeDifferenceSeconds);

  return totalSeconds
}

export function secondsToHms(totalSeconds: number) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const pad = (num: number) => num.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
