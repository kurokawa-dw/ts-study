// classでinterfaceを使って型定義
interface Book {
	page: number
	title: string
}

class Comic implements Book {
	page: number;
	title: string;

	// privateの引数は自動的にthisに入る？？
	constructor(page: number, title: string, private publishYear: string){
		this.page = page
		this.title = title
	}

	getPublishYear(){
		return this.title + 'が発売されたのは' + this.publishYear + '年です'
	}
}

const popularComic = new Comic(200, 'スラムダンク', '19950101')
export default popularComic