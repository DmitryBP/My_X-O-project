import { startPlayer } from './index.js';
import { isGorizontWin } from './isGorizontWin.js';
import { isVerticalWin } from './isVerticalWin.js';

export let currenPlayer;

startPlayer == 'x'
  ? (currenPlayer = true)
  : startPlayer == 'o'
  ? (currenPlayer = false)
  : null;

export let isGameOver = () => {
  let gameOver = false;
  isGorizontWin(gameOver)?gameOver=true:null;
  isVerticalWin(gameOver)?gameOver=true:null;;

  if (!gameOver) {
    currenPlayer = !currenPlayer;
    console.log(`Ход преходит к "${currenPlayer ? 'x' : 'o'}"`);
  }
};
