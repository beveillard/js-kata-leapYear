export function leapYear(year) {
  if (isMultipleOf(400, year)) return true;
  if (isMultipleOf(100, year)) return false;
  if (isMultipleOf(4, year)) return true;
  return false;
}

function isMultipleOf(x, year) {
  return year % x == 0;
}