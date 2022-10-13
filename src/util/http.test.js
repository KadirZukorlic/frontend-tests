import { it, vi, expect } from 'vitest'
import { sendDataRequest } from './http'

const testResponseData = { testKey: 'testData' }

const testFetch = vi.fn((url, options) => {
	return new Promise((resolve, reject) => {
		if (typeof options.body !== 'string') {
			return reject('Not a string.')
		}
		const testResponse = {
			ok: true,
			json() {
				return new Promise((resolve, reject) => {
					resolve(testResponseData)
				})
			}
		}
		resolve(testResponse)
	})
})

// Replace globaly available objects or functions
vi.stubGlobal('fetch', testFetch)

it('Should return any available response data', () => {
	const testData = { key: 'test' }

	return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData)
})

it('Should convert the provided data to JSON before sending the request', async () => {
	const testData = { key: 'test' }

	let errorMessage

	try {
		await sendDataRequest(testData)
	} catch (error) {
		errorMessage = error
	}

	expect(errorMessage).not.toBe('Not a string.')
})
