// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6_A1_T1;
* @section: 15.10.6;
* @assertion: The value of the internal [[Prototype]] property of the RegExp prototype object is the Object prototype;
* @description: Checking Object.prototype.isPrototypeOf(RegExp.prototype);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6_A1_T1",

path: "15.10.6",

description: "Checking Object.prototype.isPrototypeOf(RegExp.prototype)",

test: function testcase() {
   //CHECK#1
if (Object.prototype.isPrototypeOf(RegExp.prototype) !== true) {
	$ERROR('#1: Object.prototype.isPrototypeOf(RegExp.prototype) === true');
}


 }
});

