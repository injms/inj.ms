const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
/**
 * @param  {number} n
 * @return {string} ordinal
 */
const ordinal = (n) => {
  if (n >= 4 && n <= 20) {
    return 'th'
  }

  switch (n % 10) {
  case 1:
    return 'st'
  case 2:
    return 'nd'
  case 3:
    return 'rd'
  default:
    return 'th'
  }
}

/**
 * @param  {String} date ISO 8061 date time string.
 * @param  {String} format "iso" for ISO 8061, "human" for '22nd July 2020'
 * @return {String} date in format asked by `format` parameter
 */
const formatDate = (date, format) => {
  if (typeof date === 'undefined') {
    throw new Error('No date parameter')
  }
  if (typeof format === 'undefined') {
    throw new Error('No date format parameter')
  }

  try {
    const parsedDate = new Date(date)

    switch (format) {
    case 'iso':
      return parsedDate.toISOString()
    case 'human':
      return `${parsedDate.getDate()}${ordinal(parsedDate.getDate())} ${months[parsedDate.getMonth()]} ${parsedDate.getFullYear()}`
    }
  } catch (error) {
    console.error(error)
  }
}

module.exports = formatDate
