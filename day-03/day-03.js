import * as fs from 'fs';

import * as readline from 'readline';

let charmap = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};


function ruckSack(){
  let counter = 0;

  function handleGroup(input){

    let set1 = new Set(input[0]);
    let set2 = new Set(input[1]);
    let third = input[2];
    for (let i = 0; i < third.length; i++) {
      let current = third[i];
      if (set1.has(current) && set2.has(current)) {
        counter+=charmap[current];
        console.log('counter', counter);
        break;
      }
    }
  }

  const fileStream = fs.createReadStream('day-03-input.txt');

  //create a read line interface
  let rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  let count = 0;
  let temp = [];
  rl.on('line', (line) => {
    count++;
    temp.push(line.trim().split(''));
    if (count === 3) {
      handleGroup(temp);
      count = 0;
      temp = [];
    }
  })
  rl.on('close', () => {
    console.log(counter);
  });
}

ruckSack();
