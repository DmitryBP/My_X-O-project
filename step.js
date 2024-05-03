import { arr } from './index.js';
import { isGameOver } from './isGameOver.js';
import { showField } from './showField.js';

export let step = (xo, adres) => {
  switch (true) {
    case xo == true && adres == 1:
      arr[0][0] = 'x';
      break;
    case xo == false && adres == 1:
      arr[0][0] = 'o';
      break;
    case xo == true && adres == 2:
      arr[0][1] = 'x';
      break;
    case xo == false && adres == 2:
      arr[0][1] = 'o';
      break;
    case xo == true && adres == 3:
      arr[0][2] = 'x';
      break;
    case xo == false && adres == 3:
      arr[0][2] = 'o';
      break;
  }
  showField();
  isGameOver();

  return arr;
};
