import { it, expect } from 'vitest'
import { transformToNumber } from './numbers'

it('Should yield a value which is a typeof number', () => {
	const input = '2'

	const result = transformToNumber(input)

	expect(result).toBeTypeOf('number')
})

// it('Should yield NaN for a non-transformable values', () => {
// 	const input = 'invalid'

// 	const result = transformToNumber(input)

// 	expect(result).toBeNaN()
// })

it('Should throw an error if a passed value is non-transformable', () => {
	const input = 'Invalid'

	const resultFn = () => {
		transformToNumber(input)
	}

	expect(resultFn).toThrowError()
})
