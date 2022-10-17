import fs from 'fs'
import path from 'path'

import { expect, it, vi, beforeEach } from 'vitest'
import { Window } from 'happy-dom'

import { showError } from './dom'

const htmlDocPath = path.join(process.cwd(), 'dom.html')
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString()

const window = new Window()
const document = window.document
vi.stubGlobal('document', document)

beforeEach(() => {
	document.body.innerHTML = ''
	document.write(htmlDocumentContent)
})

it('should add an error paragraph to the id="errors', () => {
	showError('Test')

	const errorsEl = document.getElementById('errors')
	const errorParagraph = errorsEl.firstElementChild

	expect(errorParagraph).not.toBeNull()
})

it('Should not contain an error paragraph initially', () => {
	const errorsEl = document.getElementById('errors')
	const errorParagraph = errorsEl.firstElementChild

	expect(errorParagraph).toBeNull()
})

it('Should output the provided message in the error paragraph', () => {
	const testMessage = 'test'

	showError(testMessage)

	const errorsEl = document.getElementById('errors')
	const errorParagraph = errorsEl.firstElementChild

	expect(errorParagraph.textContent).toBe(testMessage)
})
