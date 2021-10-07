export const capitalize = str => {
  let firstChar = str.charAt(0).toUpperCase(),
  result = `${firstChar}${str.slice(1)}`;
  return result.replace('_', ' ');
};