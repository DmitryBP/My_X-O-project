import { arr } from './index.js';
import { startPlayer } from './index.js';

export let currenPlayer;
if (startPlayer == 'x') {
  currenPlayer = true;
} else if (startPlayer == 'o') currenPlayer = false;

export let isGameOver = () => {
  let gameOver = false;
  let row = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      row += arr[j][i];
      if (arr[i].join('') == 'xxx' || row == 'xxx') {
        gameOver = !gameOver;
        console.log("'x' победили");
      } else if (arr[i].join('') == 'ooo' || row == 'ooo') {
        console.log("'o' победили");
        gameOver = !gameOver;
      }
    }
    row = '';
  }
  if (!gameOver) {
    currenPlayer = !currenPlayer;
    console.log(`Ход преходит к "${currenPlayer ? 'x' : 'o'}"`);
    console.log(row);
  }
};
