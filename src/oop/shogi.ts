// class Game {}
// class Piece {}
// class Position {}

// class Osho extends Piece {}


type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Player = 'first' | 'second'



// 駒の位置を表すクラス
class Position {
	constructor(private suji: Suji, private dan: Dan){}

	// パラメーターに渡された位置と現在の位置を比較するメソッド
	distanceFrom(position: Position, player: Player){
		if(player === 'first'){
			return {
				suji: Math.abs(position.suji - this.suji),
				dan: Math.abs(Number(position.dan) - Number(this.dan))
			}
		} else {
			return {
				suji: Math.abs(position.suji - this.suji),
				dan: -(Math.abs(Number(position.dan) - Number(this.dan))) //縦の位置を正負反転
			}
		}
	}
}

// new Position(1,'2');

// 駒を表すクラス
// abstractは抽象クラス。newできない。継承して使う。
abstract class Piece {
	// Pieceクラスとサブクラスでアクセスできる
	protected position: Position

	constructor(private readonly player: Player, suji: Suji, dan: Dan) {
		this.position = new Position(suji, dan)
		console.log(this.position)
	}

	moveTo(position: Position){
		this.position = position
	}

	abstract canMoveTo(position: Position, player: Player): boolean
}

// const piece = new Piece('first', 1, '1');



class Osho extends Piece {
	// 王将のcamMoveToを具体的に実装
	canMoveTo(position: Position, player: Player): boolean {
		const distance = this.position.distanceFrom(position, player)
		return distance.suji < 2 && distance.dan < 2
	}
}

class Game {
	private pieces = Game.makePieces()
	private static makePieces(){
		return[
			new Osho('first', 5, '1'),
			new Osho('second', 5, '9')
		]
	}
}

export {Game}




