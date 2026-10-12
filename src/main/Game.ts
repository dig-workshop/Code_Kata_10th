type Throw = 'ROCK' | 'SCISSORS' | 'PAPER'

export const gamePlay = (player1: Throw, player2: Throw): string => {

  if(player1 === player2){
    return 'DRAW'
  }

  return 'P1_WINS'
}