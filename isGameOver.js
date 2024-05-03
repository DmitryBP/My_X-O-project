import { arr } from './index.js';
import { startPlayer } from './index.js';
import { start } from './startGame.js';

export let currenPlayer;
if (startPlayer == 'x') {
  currenPlayer = true;
} else if (startPlayer == 'o') currenPlayer = false;

export let isGameOver = () => {
  if (arr[0].includes('')) {
    currenPlayer = !currenPlayer;
    console.log(`Ход преходит к "${currenPlayer ? 'x' : 'o'}"`);
  } else {
    console.log('Сыграем еше!');
    start();
  }
};
