import { describe, it, expect } from 'vitest'
import { cleanNumbers, transformToNumber } from './numbers.js'

describe('transformToNumber()', () => {
	it('Should yield a value which is a typeof number', () => {
		const input = '2'

		const result = transformToNumber(input)

		expect(result).toBeTypeOf('number')
	})
	it('Should yield a value which is a typeof number', () => {
		const input = '2'

		const result = transformToNumber(input)

		expect(result).toBe(+input) // toBe(+input)
	})

	// it('Should yield NaN for a non-transformable values', () => {
	// 	const input = 'invalid'
	// 	const input2 = {}

	// 	const result = transformToNumber(input)
	// 	const result2 = transformToNumber(input2)

	// 	expect(result).toBeNaN()
	// 	expect(result2).toBeNaN()
	// })

	it('Should throw an error if a passed value is non-transformable', () => {
		const input = 'Invalid'

		const resultFn = () => {
			transformToNumber(input)
		}

		expect(resultFn).toThrowError()
	})
})

describe('cleanNumbers()', () => {
	it('Should return an array of number values if an array of string number values is provided', () => {
		const numberValues = ['1', '2']

		const cleanedNumbers = cleanNumbers(numberValues)

		expect(cleanedNumbers[0]).toBeTypeOf('number')
	})
})
