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
