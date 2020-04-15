import {heapPermutation} from './permutato';
import {WriteStream} from 'fs';
import * as fs from 'fs';
import {permutations} from 'mathjs';

const words: string[] = [
  'seth',
  'jeni',
  'vuki',
  'mati'
];

const outpathPath: string = './dictionary.txt';

const total: number = permutations(words.length, 3);
console.log(`In total there will be ${total} permutations.`);

const stream: WriteStream = fs.createWriteStream(outpathPath);

heapPermutation(words, 3, (result: string) => {
  stream.write(result + '\n');
});

stream.close();
