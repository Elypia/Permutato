import {getPermutationsFromArray, heapPermutation} from "./permutato";
import {WriteStream} from "fs";
import * as fs from "fs";

const words: string[] = [
  'random',
  'private',
  'road',
  'private-road',
  'random, private-road',
  'barton',
  'le',
  'clay',
  'le-clay',
  'syed',
  'shahzeb',
  'hussain',
  'shah',
  'seth',
  'ss',
  '28',
  '01',
  '1998',
  'january',
  '2016',
  '2017',
  '2018',
  'atos'
];

const outpathPath: string = './dictionary.txt';

const total: number = getPermutationsFromArray(words, 2);
console.log(`In total there will be ${total} permutations.`);

const stream: WriteStream = fs.createWriteStream(outpathPath);

heapPermutation(words, 1, (result: string) => {
  stream.write(result + '\n');
});

stream.close();
