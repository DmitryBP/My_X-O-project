import { currenPlayer } from "./index.js";
import { showField } from "./showField.js";
import { step } from "./step.js";


console.log('Игра началась!');

showField();

console.log(`Ходит "${currenPlayer?'x':'o'}"`);

step(currenPlayer, 1);
step(currenPlayer, 1);

