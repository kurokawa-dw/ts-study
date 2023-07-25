const genericsAdvancedSample = () => {
	// map関数のシグネチャ
	type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]


	// 配列のmap関数の動きを再現してみるやつ
	// 文字列配列の中身をnumberに変換して返す
	const mapStringsToNumbers:Map<string, number> = (array, fn) => {
		const result = [];
		for(let i = 0; i < array.length; i++){
			const item = array[i]
			result[i] = fn(item)
		}

		return result
	}

	const numbers = mapStringsToNumbers(['123', '456', '789'], (item) => Number(item))
	console.log(numbers);


	// number配列をstringsに変換して返す
	const mapNumbersToString:Map<number, string> = (array, fn) => {
		const result = [];
		for(let i = 0; i < array.length; i++){
			const item = array[i]
			result[i] = fn(item)
		}

		return result
	}

	const strings = mapNumbersToString(numbers, (item) => String(item))
	console.log(strings);





}

export default genericsAdvancedSample