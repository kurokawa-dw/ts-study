import { primitiveSample } from "./basic";
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice, logMessage6 } from "./function/prameters";

primitiveSample();

isUserSignedIn('ABC', 'Keiichi');
isUserSignedIn('ABD'); //オプショナル ? を関数定義でつけているから第２引数がなくてもOK
isUserSignedIn2('ABC');

const prices = [1,2,3,4];
console.log(sumProductsPrice(...prices)) //↓どちらでもOK
console.log(sumProductsPrice(1,2,3,4,5))

logMessage6('メッセージ')



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
import memo from "./typememo/memo";

// memo();