export function transformToNumber(value) {
	const regExp = /[a-zA-Z]/g

	if (regExp.test(value)) {
		throw new Error()
	} else return +value
}
