# Project: Recursion

Two classic problems from The Odin Project's [Recursion project](https://www.theodinproject.com/lessons/javascript-recursion), tackled with recursion: Fibonacci and Merge Sort.

## Part 1: Fibonacci Sequence

Two implementations that both return an array containing the first `n` numbers of the Fibonacci sequence.

- `fibs(num)` — solved iteratively with a `for` loop.
- `fibsRec(num)` — solved recursively, building the sequence one call at a time.

**Example**

```js
fibs(8);     // [0, 1, 1, 2, 3, 5, 8, 13]
fibsRec(8);  // [0, 1, 1, 2, 3, 5, 8, 13]
```

Both handle edge cases for `num === 0`, `1`, and `2` before falling into the general case.

## Part 2: Merge Sort

`mergeSort(arr)` recursively splits an array in half down to single elements (or an empty array), then merges the sorted halves back together in order.

- **Base case:** an array of length `0` or `1` is already sorted — return it as-is.
- **Recursive case:** split the array into two halves, recursively sort each half, then `merge` the two sorted halves into one.
- **`merge(left, right)`:** repeatedly compares the front elements of two already-sorted arrays and takes the smaller one, until one array is exhausted — then appends whatever's left.

**Example**

```js
mergeSort([]);                          // []
mergeSort([73]);                        // [73]
mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);   // [0, 1, 1, 2, 3, 5, 8, 13]
mergeSort([105, 79, 100, 110]);         // [79, 100, 105, 110]
```