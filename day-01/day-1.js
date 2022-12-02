// start by reading the input file
import * as fs from "fs";
import * as readline from "readline";

function getMeThatNumber() {

const fileStream = fs.createReadStream("day-1-input.txt");

let results = [];
let counter = 0;
let sum;
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

rl.on("line", (line) => {
  if (line) {
    counter += parseInt(line);
  } else {
    results.push(counter);
    counter = 0;
  }
});

rl.on("close", () => {
  results.push(counter);
  const last3 = results.sort((a, b) => a - b).slice(-3);
  // add the elements in the array together
  sum = last3.reduce((a, b) => a + b, 0);
  console.log(sum);
})


}
getMeThatNumber();


