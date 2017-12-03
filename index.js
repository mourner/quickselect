'use strict';

module.exports = quickselect;
module.exports.default = quickselect;

function quickselect(arr, k, left, right, compare, giveIndexes) {
    var indices;
	if (giveIndexes) {
	    indices = Object.keys(arr);
    }
	quickselectStep(arr, k, left || 0, right || (arr.length - 1), compare || defaultCompare, indices);
	return indices;
}

function quickselectStep(arr, k, left, right, compare, indices) {

    while (right > left) {
        if (right - left > 600) {
            var n = right - left + 1;
            var m = k - left + 1;
            var z = Math.log(n);
            var s = 0.5 * Math.exp(2 * z / 3);
            var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            quickselectStep(arr, k, newLeft, newRight, compare, indices);
        }

        var t = arr[k];
        var i = left;
        var j = right;

        swap(arr, indices, left, k);
        if (compare(arr[right], t) > 0) swap(arr, indices, left, right);

        while (i < j) {
            swap(arr, indices, i, j);
            i++;
            j--;
            while (compare(arr[i], t) < 0) i++;
            while (compare(arr[j], t) > 0) j--;
        }

        if (compare(arr[left], t) === 0) swap(arr, indices, left, j);
        else {
            j++;
            swap(arr, indices, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

function swap(arr, ind, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    if (ind) {
	    tmp = ind[i];
	    ind[i] = ind[j];
	    ind[j] = tmp;
    }
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
