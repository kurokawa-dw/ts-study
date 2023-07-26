import { primitiveSample } from "./basic";
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice, logMessage6 } from "./function/prameters";
import objectSample from "./object/object";
import typeAliasSample from "./object/alias"
import genericsBasicSample from "./generics/basic"
import genericsAdvancedSample from "./generics/advanced";
import { Game } from "./oop/shogi";

// primitiveSample();

// isUserSignedIn('ABC', 'Keiichi');
// isUserSignedIn('ABD'); //オプショナル ? を関数定義でつけているから第２引数がなくてもOK
// isUserSignedIn2('ABC');

// const prices = [1,2,3,4];
// console.log(sumProductsPrice(...prices)) //↓どちらでもOK
// console.log(sumProductsPrice(1,2,3,4,5))

// logMessage6('メッセージ');


// objectSample();
// typeAliasSample();

// // 07.ジェネリック型とポリモーフィズム
// genericsBasicSample();
// genericsAdvancedSample();


const game = new Game();
console.log(game)


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
import memo from "./typememo/memo";

// memo();