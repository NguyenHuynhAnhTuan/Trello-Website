// Capitalize First Letter of a String
const capitalizeFirstLetter = (val) => {
  if (!val) return ''
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
}

export { capitalizeFirstLetter }