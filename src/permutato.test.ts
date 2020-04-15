import {getPermutations} from "./permutato";

test('Adding 1 + 1 equals 2', () => {
  const actual: number = getPermutations(4, 4);
  const expected: number = 24;

  expect(actual).toBe(expected);
});
