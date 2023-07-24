import { primitiveSample } from "./basic";

primitiveSample();


////////////////////////////////////////////////////////////////////////

// 文字列、数、真偽値
let str: string = '文字ですよ';
let num: number = 39;
let flag: boolean = true;
console.log(str,num,flag)


// オブジェクトの型定義
// const person: {
// 	name: string;
// 	age: number;
// } = {
// 	name: 'Jack',
// 	age: 21
// }

const person = {
	name: 'Jack',
	age: 21
}

person.name = 0; //自動でperson.nameはstring型だと推論してくれる

console.log(person.gender)

// 配列
const fruits: string[] = ['Apple', 'Banana', 'Grape'];
// const fruits = ['Apple', 'Banana', 'Grape'];

fruits[0] = 1; //型推論してくれる
console.log(fruits)



// tuple タプル型 配列の厳しいバージョン
// 配列にいくつ入るか、どのindexに何の型が入るかを決められる
const book: [string, number, boolean] = ['business', 1500, false];
book.push(21) //4つ目に普通にpushできてしまう。
console.log(book[3]) //4つ目を参照しようとするとエラー！



// enum 列挙型 （ユニオン&リテラル型を使った方がいいらしい？? enumのほうがいいいい時もある）
enum CoffeeSize  {
	SHORT = 'SHORT',
	TALL = 'TALL',
	GRANDE = 'GRANDE',
	VENTI = 'VENTI'
	// SHORT,
	// TALL,
	// GRANDE,
	// VENTI
}

const coffee = {
	hot: true,
	size: CoffeeSize.SHORT
}

console.log(coffee)


// ユニオン型
let unionType: number | string | string = 10;
// unionType.toUpperCase();
unionType = 'hello';
unionType.toLocaleUpperCase();
console.log(unionType);

// ユニオン型 配列
let unionTypes: (number | string)[] = [21, 'hello'];
unionTypes.push(false)
console.log(unionTypes);

// リテラル型
const apple: 'apple' = 'apple2';
console.log(apple)


// リテラル型とユニオン型を組み合わせると、enum的なこともできるけど...
let clothSize: 'small' | 'medium' | 'large' = 'small';
console.log(clothSize);

// typeエイリアス たぶんこれよく使う
type figureType = 'fat' | 'skin';
let you1: figureType = 'fat';
let you2: figureType = 'デブ';

console.log(you1, you2);

// インターフェイス オブジェクトに使用 typeエイリアスに似てるけどオブジェクトだけ
interface book{
	title: string;
	date: number;
}

const bookItem: book  = {
	title: 'タイトル',
	date: 20230725
}

console.log(bookItem, typeof bookItem.title)




////////////////////////////////////////////////////////////////////////
// 関数に型をつける
////////////////////////////////////////////////////////////////////////

function add(num1: number, num2: number): number{
	//戻り値には型推論がきくから定義しなくてもok、だけどつけておいた方がいい
	return num1 + num2;
}

console.log(add(1,2));


// void型
function sayHello(): void{
	console.log('Hello');
}

sayHello();

// 無名関数の時（変数に代入する関数）
const anotherAdd: (n1: number, n2: number) => number = add;
console.log(anotherAdd(5,3));


// const doubleNumber = (num: number): number => num * 2; // ←↓どちらでもよい
const doubleNumber: (num: number) => number = num => num * 2;

console.log(doubleNumber(10));



