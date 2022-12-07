import * as fs from 'fs';

function decodeStartOfPacket(){
  let data = fs.readFileSync('day-06-input.txt', 'utf8');
  let set = new Set();
  let pointer = 0;
  for (let i = pointer; set.size < 14; i++) {
    let char = data[i];
    if (set.has(char)) {
      //i guess this moves the pointer up and starts looking from the spot of the pointer
      pointer++;
      i = pointer;
      set.clear();
    } else {
      set.add(char);
    }
  }
  console.log(pointer + 15);
}
decodeStartOfPacket();
