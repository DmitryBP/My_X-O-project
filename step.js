import { changePlayer, currenPlayer } from './changePlayer.js';
import { arr } from './index.js';
import { showField } from './showField.js';

export let step = (xo, adres) => {
  switch (true) {
    case xo == true && adres == 1:
      arr[0][0] = 'x';
      showField();
      changePlayer();
      break;
    case xo == 'x' && adres == 2:
      arr[0][1] = 'x';
      break;
    case xo == 'x' && adres == 3:
      arr[0][2] = 'x';
      break;
    case xo == 'x' && adres == 4:
      arr[1][0] = 'x';
      break;
    case xo == 'x' && adres == 5:
      arr[1][1] = 'x';
      break;
    case xo == 'x' && adres == 6:
      arr[1][2] = 'x';
      break;
    case xo == 'x' && adres == 7:
      arr[2][0] = 'x';
      break;
    case xo == 'x' && adres == 8:
      arr[2][1] = 'x';
      break;
    case xo == 'x' && adres == 9:
      arr[2][2] = 'x';
      break;
    case xo == 'o' && adres == 1:
      arr[0][0] = 'o';
      break;
    case xo == 'o' && adres == 2:
      arr[0][1] = 'o';
      break;
    case xo == 'o' && adres == 3:
      arr[0][2] = 'o';
      break;
    case xo == 'o' && adres == 4:
      arr[1][0] = 'o';
      break;
    case xo == false && adres == 5:
      arr[1][1] = 'o';
      showField();
      changePlayer();
      break;
    case xo == 'o' && adres == 6:
      arr[1][2] = 'o';
      break;
    case xo == 'o' && adres == 7:
      arr[2][0] = 'o';
      break;
    case xo == 'o' && adres == 8:
      arr[2][1] = 'o';
      break;
    case xo == 'o' && adres == 9:
      arr[2][2] = 'o';
      break;
  }
  return arr;
};
