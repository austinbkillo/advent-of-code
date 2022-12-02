import * as fs from 'fs';

import * as readline from "readline";

function rockPaperScissors() {
  const fileStream = fs.createReadStream('day-02-input.txt');

  function handleRock(input) {
    if (input === 'Y') {
      //2 for paper and 6 for win
      return 8;
    } else if (input === 'X') {
      // 1 for rock and 3 for tie
      return 4;
    }
      // 3 for scissors and 0 for loss
      return 3;
  }

function handlePaper(input) {
  if (input === 'Y') {
    // 2 for paper and 3 for tie
    return 5;
  } else if (input === 'X') {
    // 1 for rock and 0 for loss
    return 1;
  }
    // 3 for scissors and 6 for win
    return 9;
}

function handleScissors(input) {
  if (input === 'Y') {
    // 2 for paper and 0 for loss
    return 2;
  } else if (input === 'X') {
    // 1 for rock and 6 for win
    return 7;
  }
    // 3 for scissors and 3 for tie
    return 6;
}
  let counter = 0;
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  rl.on('line', (line) => {
    line = line.replace(/\s/g, '');
    if (line[0] === 'A') {
      counter += handleRock(line[1]);
    } else if (line[0] === 'B') {
     counter += handlePaper(line[1]);
    } else {
      counter += handleScissors(line[1]);
    }
  });

  rl.on('close', () => {
    console.log(counter);
  });
}

rockPaperScissors();
