// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.3_A3_T4;
* @section: 11.2.3;
* @assertion: If MemberExpression is not Object, throw TypeError;
* @description: Checking "undefined" case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.3_A3_T4",

path: "11.2.3",

description: "Checking \"undefined\" case",

test: function testcase() {
   //CHECK#1
try {
  undefined();
    $ERROR('#1.1: undefined() throw TypeError. Actual: ' + (e));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: undefined() throw TypeError. Actual: ' + (e));	
  }
}

//CHECK#2
try {
  var x = undefined;
  x();
    $ERROR('#2.1: var x = undefined; x() throw TypeError. Actual: ' + (e));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#2.2: var x = undefined; x() throw TypeError. Actual: ' + (e));	
  }
}

 }
});

