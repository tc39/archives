// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.3.2_A4_T4;
* @section: 11.3.2, 11.6.3;
* @assertion: Operator x-- returns ToNumber(x);
* @description: If Type(x) is undefined or null;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.3.2_A4_T4",

path: "11.3.2, 11.6.3",

description: "If Type(x) is undefined or null",

test: function testcase() {
   //CHECK#1
var x; 
var y = x--;
if (isNaN(y) !== true) {
  $ERROR('#1: var x; var y = x--; y === Not-a-Number. Actual: ' + (y));
}

//CHECK#2
var x = null;
var y = x--;
if (y !== 0) {
  $ERROR('#2: var x = null; var y = x--; y === 0. Actual: ' + (y));
}

 }
});

