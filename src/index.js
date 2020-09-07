const dictionary = {
  "1" : 'one',
  '2' : 'two',
  '3' : 'three',
  '4' : 'four',
  '5' : 'five',
  '6' : 'six',
  '7' : 'seven',
  '8' : 'eight',
  '9' : 'nine',
  '10' : 'ten',
  '11' : 'eleven',
  '12' : 'twelve',
  '13' : 'thirteen',
  '14' : 'fourteen',
  '15' : 'fifteen',
  '16' : 'sixteen',
  '17' : 'seventeen',
  '18' : 'eighteen',
  '19' : 'nineteen',
  '20' : 'twenty',
  '30' : 'thirty',
  '40' : 'forty',
  '50' : 'fifty',
  '60' : 'sixty',
  '70' : 'seventy',
  '80' : 'eighty',
  '90' : 'ninety',
  '100' : 'hundred'
}

module.exports = function toReadable (number) {
  if (number === 0) return 'zero'

  const hundredCheckRemainder = number % 100;
  const hundredCheckValue = Math.floor(number / 100);
  const hundredCheckString = dictionary[hundredCheckValue] ? dictionary[hundredCheckValue] + ' hundred ' : ''

  if (hundredCheckRemainder >= 10 && hundredCheckRemainder <= 20) {
    return `${hundredCheckString}${dictionary[hundredCheckRemainder]}`
  }

  const tenCheckRemainder = hundredCheckRemainder % 10;
  const tenCheckValue = Math.floor(hundredCheckRemainder / 10);
  const tenCheckString = dictionary[tenCheckValue] ? dictionary[10 * tenCheckValue] + ' ' : ''

  return (hundredCheckString + tenCheckString + (dictionary[tenCheckRemainder] || '')).trim()



}