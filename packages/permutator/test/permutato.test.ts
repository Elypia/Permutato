import {heapPermutation} from "../src/permutato";

test('Get all permutations for a small array', () => {
  const array = ['Sethi', 'Jenni', 'Vuki', 'Mati'];
  let result: string[] = [];
  heapPermutation(array, 4, (s) => result.push(s));

  const actual: number = result.length;
  const expected: number = 24;

  expect(actual).toBe(expected);
});

test('Get permutations of n items in larger array', () => {
  const array = ['Sethi', 'Jenni', 'Vuki', 'Mati'];
  let result: string[] = [];
  heapPermutation(array, 2, (s) => result.push(s));

  const actual: number = result.length;
  const expected: number = 12;

  expect(actual).toBe(expected);
});
