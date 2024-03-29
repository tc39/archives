// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.5_A11_T2;
 * @section: 8.5, 7.8.3;
 * @assertion: The integer 0 has two representations, +0 and -0;
 * @description: Compare positive_zero and negative_zero;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.5_A11_T2",

path: "8.5, 7.8.3",

description: "Compare positive_zero and negative_zero",

test: function testcase() {
   var p_zero=+0;
var n_zero=-0;

//CHECK #1
if ((p_zero == n_zero) !== true){
  $ERROR('#1: var p_zero=+0; var n_zero=-0; p_zero != n_zero');
}

//CHECK #2
if ((n_zero == 0) !== true){
  $ERROR('#2: var p_zero=+0; var n_zero=-0; n_zero == 0');
}

//CHECK #3
if ((p_zero == -0) !== true){
  $ERROR('#3: var p_zero=+0; var n_zero=-0; p_zero == -0');
}

//CHECK #4
if ((p_zero === 0) !== true){
  $ERROR('#4: var p_zero=+0; var n_zero=-0; p_zero === 0');
}

//CHECK #5
if ((n_zero === -0) !== true){
  $ERROR('#5: var p_zero=+0; var n_zero=-0; n_zero === -0');
}

 }
});

