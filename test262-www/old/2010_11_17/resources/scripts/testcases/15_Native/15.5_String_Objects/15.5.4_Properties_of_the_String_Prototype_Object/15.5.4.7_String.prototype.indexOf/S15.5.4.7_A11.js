// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.7_A11;
* @section: 15.5.4.7;
* @assertion: The length property of the indexOf method is 1;
* @description: Checking String.prototype.indexOf.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.7_A11",

path: "15.5.4.7",

description: "Checking String.prototype.indexOf.length",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.indexOf.hasOwnProperty("length"))) {
  $ERROR('#1: String.prototype.indexOf.hasOwnProperty("length") return true. Actual: '+String.prototype.indexOf.hasOwnProperty("length")); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.indexOf.length !== 1) {
  $ERROR('#2: String.prototype.indexOf.length === 1. Actual: '+String.prototype.indexOf.length ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

