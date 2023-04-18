const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof number == 'O748105141'
const secondaryValid = typeof number == '0219131568'

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid)

const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line (parseInt) && ||

console.log(hourOfDay === "00")
console.log(hourOfDay !== null && minuteOfDay !== null && hourOfDay == '00' && minuteOfDay == '00')

if (hourOfDay !== null && minuteOfDay !== null && hourOfDay == '00' && minuteOfDay == '00') {
	const taxAsDecimal = parseInt(tax) / 100

	console.log(taxAsDecimal, salary * taxAsDecimal)
  const startingAfterTax = salary - salary * taxAsDecimal
	const balance = startingAfterTax - (transport + food + rent)

	console.log(balance.toFixed(2))
}
	
