/**
 * Factorial function to calcualte the factorial of a
 * positive integer number.
 *
 * @param value The number to calculate the factorial of.
 */
export function factorial(value: number): number {
  if (value === 0)
    return 1;

  if (value < 0)
    throw 'Factorial is only defined for non-negative real numbers';

  return value * factorial(value - 1);
}

export function getPermutationsFromArray(array: string[], itemsToSelect?: number, upto: boolean = false): number {
  return getPermutations(array.length, itemsToSelect, upto);
}

/**
 * Get the total number of permutations that will be
 * found with this array size and items to select.
 *
 * @param arraySize The size of the array to check.
 * @param itemsToSelect The number of items to select.
 * @param upto If we should select uptimes upto that many, or just that many exactly.
 */
export function getPermutations(arraySize: number, itemsToSelect: number = arraySize, upto: boolean = false): number {
  if (arraySize < itemsToSelect)
    throw 'Can\'t have more items to select, than items in the array';

  const start = (upto) ? 1 : itemsToSelect;

  let result = 0;

  for (let i = start; i <= itemsToSelect; i++)
    result += factorial(arraySize) / factorial(arraySize - i);

  return result;
}

/**
 * An implemention of Heap's algorithm in order to produce
 * all permutations of an array.
 *
 * @see https://en.wikipedia.org/wiki/Heap%27s_algorithm
 *
 * @param array An array of any type.
 * @param itemsToSelect The number of items per permutation.
 * @param callback What to do with each result output by the method.
 * @param size
 */
export function heapPermutation(array: unknown[], itemsToSelect: number = array.length, callback: (result: string) => void, size: number = array.length): void {
  if (size === 1) {
    const items: unknown[] = array.slice(0, itemsToSelect);
    const joined: string = items.join('');
    callback(joined);
  }

  for (let i = 0; i < size; i++) {
    heapPermutation(array, itemsToSelect, callback, size - 1);

    if (size % 2 == 1) {
      let temp = array[0];
      array[0] = array[size - 1];
      array[size - 1] = temp;
    } else {
      let  temp = array[i];
      array[i] = array[size - 1];
      array[size - 1] = temp;
    }
  }
}
