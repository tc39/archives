// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.14_A3_T6;
* @section: 15.5.4.14;
* @assertion: String.prototype.split() returns an Array object with:
*  i) length equaled to 1,
* ii) [[Get]](0) equaled to the result of converting this object to a string;
* @description: Instance is Number(-1e21);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.14_A3_T6",

path: "15.5.4.14",

description: "Instance is Number(-1e21)",

test: function testcase() {
   var __instance = new Number(-1e21);

__instance.split = String.prototype.split;

var __split = __instance.split();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__split.constructor !== Array) {
  $ERROR('#1: var __instance = new Number(-1e21); __instance.split = String.prototype.split; __split = __instance.split(); __split.constructor === Array. Actual: '+__split.constructor );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.length !== 1) {
  $ERROR('#2: var __instance = new Number(-1e21); __instance.split = String.prototype.split; __split = __instance.split(); __split.length === 1. Actual: '+__split.length );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__split[0] !== __instance.toString()) {
  $ERROR('#3: var __instance = new Number(-1e21); __instance.split = String.prototype.split; __split = __instance.split(); __split[0] === __instance.toString(). Actual: '+__split[0] );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

