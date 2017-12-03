'use strict';

var test = require('tape').test;
var quickselect = require('./');

test('selection', function (t) {
    var arr =
			[65, 28, 59, 33, 21,
			 56, 22, 95, 50, 12,
			 90, 53, 28, 77, 39],
	    result =
			[39, 28, 28, 33, 21,
			 12, 22, 50, 53, 56,
			 59, 65, 90, 77, 95],
	    expectedIndices =
			['14','1','12', '3','4',
			  '9','6', '8','11','5',
			  '2','0','10','13','7'],
	    indices = quickselect(arr, 8);
    
    t.deepEqual(arr, result);
    t.deepEqual(indices, expectedIndices);
    
    t.end();
});
