// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.1.2.4_A2.6;
* @section: 15.1.2.4;
* @assertion: The isNaN property has not prototype property;
* @description: Checking isNaN.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.4_A2.6",

path: "15.1.2.4",

description: "Checking isNaN.prototype",

test: function testcase() {
   //CHECK#1
if (isNaN.prototype !== undefined) {
  $ERROR('#1: isNaN.prototype === undefined. Actual: ' + (isNaN.prototype));
}

 }
});

