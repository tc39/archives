// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.15_A9;
* @section: 15.5.4.15;
* @assertion: The String.prototype.substring.length property has the attribute DontDelete;
* @description: Checking if deleting the String.prototype.substring.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.15_A9",

path: "15.5.4.15",

description: "Checking if deleting the String.prototype.substring.length property fails",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.substring.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.substring.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.substring.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.substring.length) {
  $ERROR('#1: delete String.prototype.substring.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.substring.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.substring.length; String.prototype.substring.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.substring.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

