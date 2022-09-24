import { it, expect, beforeAll, beforeEach, afterAll, afterEach } from 'vitest'

import { User } from './hooks'

const testEmail = 'test@test.com'
let user

beforeAll(() => {
	user = new User(testEmail)
	console.log('beforeAll()')
})
beforeEach(() => {
	// user = new User(testEmail) //this can be used also
	console.log('beforeEach()')
})
afterEach(() => {
	user = new User(testEmail)
	console.log('afterEach()')
})
afterAll(() => console.log('afterAll()'))

// .concurrent => runs test paralel, can be used to speed up testing process if there is huge amount of tests
// describe.concurrent() => runs all testes of suit concurrently

it.concurrent('should update the email', () => {
	const newTestEmail = 'test2@test.com'

	user.updateEmail(newTestEmail)

	expect(user.email).toBe(newTestEmail)
})

it.concurrent('should have an email property', () => {
	expect(user).toHaveProperty('email')
})

it.concurrent('should store the provided email value', () => {
	expect(user.email).toBe(testEmail)
})

it.concurrent('should clear the email', () => {
	user.clearEmail()

	expect(user.email).toBe('')
})

it.concurrent(
	'should still have an email property after clearing the email',
	() => {
		user.clearEmail()

		expect(user).toHaveProperty('email')
	}
)
