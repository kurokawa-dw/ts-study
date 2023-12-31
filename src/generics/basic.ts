const genericsBasicSample = () => {
	// ジェネリック型を使わない場合
	const stringReduce = (array: string[], initialValue: string): string => {
		let result = initialValue
		for(let i = 0; i < array.length; i++){
			result += array[i]
		}

		return result
	}

	console.log('Generics basic sample 1', stringReduce(['May ', 'the ', 'force ', 'be ', 'with ', 'you'], ''));

	const numberReduce = (array: number[], initialValue: number): number => {
		let result = initialValue
		for(let i = 0; i < array.length; i++){
			result += array[i]
		}

		return result
	}

	console.log('Generics basic sample 2', numberReduce([100,200,300], 1000));


	// ジェネリック型を使う
	type GenericReduce<T> = {
		(array: T[], initialValue: T): T
	}

	const genericStringReduce: GenericReduce<string> = (array, iniialValue) => {
		let result = iniialValue
		for(let i = 0; i < array.length; i++){
			result += array[i]
		}

		return result
	}

	console.log('Generics basic sample 3', genericStringReduce(['May ', 'the ', 'force ', 'be ', 'with ', 'you'], ''));

	const genericNumberReduce: GenericReduce<number> = (array, iniialValue) => {
		let result = iniialValue
		for(let i = 0; i < array.length; i++){
			result += array[i]
		}

		return result
	}

	console.log('Generics basic sample 4', genericNumberReduce([100,200,300], 1000));


	// 色々なジェネリック型の定義方法
	// 完全な呼び出しシグネチャ（ここのシグネチャにジェネリック型を割り当てる）
	type GnericReduce2 = {
		<T>(arrya: T[], iniialValue: T): T
		<U>(arrya: U[], iniialValue: U): U
	}

	// 呼び出しシグネチャの省略記法
	type GenericReduce3<T> = (array: T[], iniialValue: T) => T
	type GenericReduce4 = <T>(array: T[], iniialValue: T) => T



}

export default genericsBasicSample