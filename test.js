
import test from 'node:test';
import assert from 'node:assert/strict';
import quickselect from './index.js';

test('selection', () => {
    const arr = [65, 28, 59, 33, 21, 56, 22, 95, 50, 12, 90, 53, 28, 77, 39];
    quickselect(arr, 8);
    assert.deepEqual(arr, [39, 28, 28, 33, 21, 12, 22, 50, 53, 56, 59, 65, 90, 77, 95]);
});
