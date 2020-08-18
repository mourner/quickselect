/**
 * Rearranges items so that all items in the [left, k] are the smallest.
 * The k-th element will have the (k - left + 1)-th smallest value in [left, right].
 *
 * @param arr the array to partially sort (in place)
 * @param k middle index for partial sorting (as defined above)
 * @param left left index of the range to sort (0 by default)
 * @param right right index (last index of the array by default)
 * @param compare compare function
 */
export default function quickselect<T>(
    arr: T[],
    k: number,
    left?: number,
    right?: number,
    compare?: (x: T, y: T) => number
): void;
