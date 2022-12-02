// start by reading the input file
import * as fs from "fs";
import * as readline from "readline";

function getMeThatNumber() {

const fileStream = fs.createReadStream("test.txt");

let counter = 0;
let max = 0;
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

rl.on("line", (line) => {
  if (line) {
    console.log(`[${line}]`)
    counter += parseInt(line);
  } else {
    console.log('counter', counter, 'max', max);
     if (counter > max) {
       max = counter;
     }
     counter = 0;
  }
});

rl.on("close", () => {
  console.log("max", max);
})

}
getMeThatNumber();


