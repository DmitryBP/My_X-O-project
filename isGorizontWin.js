import { arr } from './index.js';

export let isGorizontWin = (gameOver) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].join('') == 'xxx') {
      gameOver = !gameOver;

      console.log("'x' победили");
    } else if (arr[i].join('') == 'ooo') {
      gameOver = !gameOver;
      console.log("'o' победили");
    }
  }
  return gameOver;
};
