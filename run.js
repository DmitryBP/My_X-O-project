import { currenPlayer } from './isGameOver.js';
import { start } from './startGame.js';
import { step } from './step.js';

start()
step(currenPlayer, 1); //x
step(currenPlayer, 2); //o
step(currenPlayer, 6); //x
step(currenPlayer, 6); //o
step(currenPlayer, 4); //x
step(currenPlayer, 5); //o
step(currenPlayer, 9); //x
step(currenPlayer, 8); //o
// step(currenPlayer, 9); //x

// step(currenPlayer, 1);
// step(currenPlayer, 1);
// step(currenPlayer, 4);
// step(currenPlayer, 2);
// step(currenPlayer, 4);
// step(currenPlayer, 3);
