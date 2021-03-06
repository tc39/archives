// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.1.8_A2;
 * @section: 15.8.1.8;
 * @assertion: Value Property SQRT2 of the Math Object has the attribute DontEnum;
 * @description: Checking if Math.SQRT2 property has the attribute DontEnum;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.1.8_A2",

path: "15.8.1.8",

description: "Checking if Math.SQRT2 property has the attribute DontEnum",

test: function testcase() {
   // CHECK#1
for(x in Math) {
  if(x === "SQRT2") {
    $ERROR('#1: Value Property SQRT2 of the Math Object hasn\'t attribute DontEnum: \'for(x in Math) {x==="SQRT2"}\'');
  }
}


 }
});

