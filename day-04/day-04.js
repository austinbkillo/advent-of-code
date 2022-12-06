import * as fs from 'fs';
import * as readline from 'readline';
import _ from 'lodash';

function checkPairs(){
    let rl = readline.createInterface({
        input: fs.createReadStream('day-04-input.txt')
    });

    let total = 0;
// 13-15, 10-20
    rl.on('line', (line) => {
      let pairs = line.split(',');
      let p1 = pairs[0].split('-');
      let p2 = pairs[1].split('-');
      let start1 = parseInt(p1[0]);
      let end1 = parseInt(p1[1]);
      let start2 = parseInt(p2[0]);
      let end2 = parseInt(p2[1]);
      if (_.inRange(start1, start2, end2 + 1) && _.inRange(end1, start2, end2 + 1)) {
        total++;
      } else if (_.inRange(start2, start1, end1 + 1) && _.inRange(end2, start1, end1 + 1)) {
        total++;
      }
    });

    rl.on('close', () => {
        console.log(total);
    });
};

checkPairs();
