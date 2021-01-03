export function leapYear(y) {
  if (isMultipleOf(400, y)) return true;
  if (isMultipleOf(100, y)) return false;
  if (isMultipleOf(4, y)) return true;
  return false;
}

function isMultipleOf(m, y) {
  return y % m === 0;
}
