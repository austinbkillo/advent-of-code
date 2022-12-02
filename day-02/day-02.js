import * as fs from 'fs';

import * as readline from "readline";

function rockPaperScissors() {
  const fileStream = fs.createReadStream('day-02-input.txt');

  function handleRock(input) {
    if (input === 'Y') {
      //draw
      return 1 + 3;
    } else if (input === 'X') {
      // lose
      return 3 + 0
    }
      // win
      return 2 + 6;
  }

function handlePaper(input) {
  if (input === "Y") {
    // draw
    return 2 + 3;
  } else if (input === "X") {
    // lose
    return 1 + 0;
  }
  // win
  return 3 + 6;
}

function handleScissors(input) {
  if (input === 'Y') {
    // draw
    return 3 + 3;
  } else if (input === 'X') {
    // lose
    return 2 + 0;
  }
  // win
    return 1 + 6;
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
