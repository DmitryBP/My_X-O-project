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
    case xo == true && adres == 4:
      arr[1][0] = 'x';
      break;
    case xo == false && adres == 4:
      arr[1][0] = 'o';
      break;
    case xo == true && adres == 5:
      arr[1][1] = 'x';
      break;
    case xo == false && adres == 5:
      arr[1][1] = 'o';
      break;
    case xo == true && adres == 6:
      arr[1][2] = 'x';
      break;
    case xo == false && adres == 6:
      arr[1][2] = 'o';
      break;
    case xo == true && adres == 7:
      arr[2][0] = 'x';
      break
    case xo == false && adres == 7:
      arr[2][0] = 'o';
      break;
    case xo == true && adres == 8:
      arr[2][1] = 'x';
      break;
    case xo == false && adres == 8:
      arr[2][1] = 'o';
      break;
    case xo == true && adres == 9:
      arr[2][2] = 'x';
      break;
    case xo == false && adres == 9:
      arr[2][2] = 'o';
      break;
  }
  showField();
  isGameOver();

  return arr;
};
