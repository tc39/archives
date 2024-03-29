// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.3_A10;
* @section: 15.3.4.3;
* @assertion: The Function.prototype.apply.length property has the attribute ReadOnly;
* @description: Checking if varying the Function.prototype.apply.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.3_A10",

path: "15.3.4.3",

description: "Checking if varying the Function.prototype.apply.length property fails",

test: function testcase() {
   //CHECK#1
if (!(Function.prototype.apply.hasOwnProperty('length'))) {
  $FAIL('#1: the Function.prototype.apply has length property.');
}

var obj = Function.prototype.apply.length;

Function.prototype.apply.length = function(){return "shifted";};

//CHECK#2
if (Function.prototype.apply.length !== obj) {
  $ERROR('#2: the Function.prototype.apply length property has the attributes ReadOnly.');
}

 }
});

