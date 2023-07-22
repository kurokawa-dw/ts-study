const primitiveSample = () => {
	let name: string = 'Keiichi'
	name = 'けーちゃん'
	console.log(`primitive sample: ${[typeof name, name]}`)

	let age: number = 39
	// age = 'けーちゃん'
	console.log(`primitive sample: ${[typeof age, age]}`)
}

export default primitiveSample