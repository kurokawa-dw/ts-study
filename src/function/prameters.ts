// オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, userName?: string): boolean => {
	console.log('isUserSignedIn');
	if(userId === 'ABC'){
		console.log('Function prameter sample 1: User is signed in! Username is', userName);
		return true
	} else {
		console.log('Function prameter sample 2: User is not signed in.');
		return false
	}
}

// デフォルトパラメーター
export const isUserSignedIn2 = (userId: string, userName: string = 'NO NAME'): boolean => {
	console.log('isUserSignedIn');
	if(userId === 'ABC'){
		console.log('Function prameter sample 3: User is signed in! Username is', userName);
		return true
	} else {
		console.log('Function prameter sample 4: User is not signed in.');
		return false
	}
}


// レストパラメーターを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
	return productsPrice.reduce((prevTotal: number, productPrice: number): number => {
		return prevTotal + productPrice
	}, 0) //0は初期値
}

// 呼び出しシグネチャ
type logMessage = (message: string) => void
export const logMessage6: logMessage = (message) => {
	console.log('Function prameter sample 6:', message);
}

type FullLogMessage = {
	(message: string): void
}
export const logMessage7: FullLogMessage = (message) => {
	console.log('Function prameter sample 7:', message);
}