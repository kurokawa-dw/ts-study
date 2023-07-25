export default function objectSample(){
	const a: object = {
		name: 'Keiichi',
		age: 39
	}

	// a.name = 'chinpo';

	console.log(a);

	// オブジェクトリテラル記法
	let country: {
		language: string
		name: string
	} = {
		language: 'japanese',
		name: 'Japan'
	}

	console.log('Object object sample 1:', country)


	country = {
		language: 'English',
		name: 'United States of America'
	}

	console.log('Object object sample 2:', country)


	// オプショナルとreadonly
	const bendteq: {
		age: number;
		lastName: string;
		readonly firstName: string;
		gender?: string
	} = {
		age: 39,
		lastName: 'Kurokawa',
		firstName: 'Keiichi'
	}

	bendteq.firstName = 'Takashi';
	bendteq.gender = 'male'

	console.log('Object object sample 3:', bendteq)



	// インデックスシグネチャ
	// オブジェクトのキー一つ一つに型を定義しなくていい、後からオブジェクトのキー好きなように増やせる
	const capitals: {
		[countryName: string]: string
	} = {
		Japan: 'Tokyo',
		Korea: 'Seoul'
	}

	capitals.Chaina = 'Beijing'
	capitals.Canada = 'Ottawa'


	console.log('Object object sample 4:', capitals)


}