import { startPlayer } from "./index.js";

export let start = () => {
  console.log(`Выберите за кого играть ('x' / 'y')`);
  console.log('Игра началась! ', `Вы играете за ${startPlayer}, ваш ход.`);
  return ;
};
