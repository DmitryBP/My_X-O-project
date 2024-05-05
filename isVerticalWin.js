import { arr } from './index.js';

export let isVerticalWin = (gameOver) => {
  let row = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      row += arr[j][i];
      if (row == 'xxx') {
        gameOver = !gameOver;
        console.log("'x' победили");
      } else if (row == 'ooo') {
        console.log("'o' победили");
        gameOver = !gameOver;
      }
    }
    row = '';
  }
  return gameOver;
};
