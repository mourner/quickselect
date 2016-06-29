## quickselect [![Build Status](https://travis-ci.org/mourner/quickselect.svg?branch=master)](https://travis-ci.org/mourner/quickselect)

A tiny and fast [selection algorithm](https://en.wikipedia.org/wiki/Selection_algorithm) in JavaScript
(specifically, [Floyd-Rivest selection](https://en.wikipedia.org/wiki/Floyd%E2%80%93Rivest_algorithm)).

```js
quickselect(array, k, left, right, compareFn);
```

Rearranges items so that all items in the `[left, k]` are the smallest.
The `k`-th element will have the `(k - left + 1)`-th smallest value in `[left, right]`.

- `array`: the array to partially sort (in place)
- `k`: middle index for partial sorting (as defined above)
- `left`: left index of the range to sort
- `right`: right index (inclusive)
- `compareFn`: compare function

Example:

```js
var arr = [65, 28, 59, 33, 21, 56, 22, 95, 50, 12, 90, 53, 28, 77, 39];

quickselect(arr, 8, 0, arr.length - 1, function (a, b) { return a - b; });

// arr is [39, 28, 28, 33, 21, 12, 22, 50, 53, 56, 59, 65, 90, 77, 95]
//                                         ^^ middle index
```
