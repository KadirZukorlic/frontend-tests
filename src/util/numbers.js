import { validateStringNotEmpty, validateNumber } from './validation.js'

export function transformToNumber(value) {
	const regExp = /[a-zA-Z]/g

	if (regExp.test(value)) {
		throw new Error()
	} else return +value
}

export function cleanNumbers(numberValues) {
	const numbers = []

	for (const numberInput of numberValues) {
		validateStringNotEmpty(numberInput)
		const number = transformToNumber(numberInput)
		validateNumber(number)
		numbers.push(number)
	}
	return numbers
}
