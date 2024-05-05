let arr = [
  ['x', 'o', ''],
  ['x', 'x', ''],
  ['x', 'o', ''],
];
let row1 = '';
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    row1 += arr[j][i];
    console.log(row1);
  }
}
// arr[0][0]+arr[1][0]+arr[2][0] = arr[i][0]
// arr[0][1]+arr[1][1]+arr[2][1]
// arr[0][2]+arr[1][2]+arr[2][2]
// row2 = row2 + arr[i][1];
// row3 = row3 + arr[i][2];
