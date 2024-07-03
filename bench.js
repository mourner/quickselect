
import quickselect from './index.js';

const N = 10000000;
const arr = [];
for (let i = 0; i < N; i++) arr.push(Math.random());

console.time('quickselect');
quickselect(arr, Math.floor(N / 2), 0, N - 1, (a, b) => (a < b ? -1 : a > b ? 1 : 0));
console.timeEnd('quickselect');
