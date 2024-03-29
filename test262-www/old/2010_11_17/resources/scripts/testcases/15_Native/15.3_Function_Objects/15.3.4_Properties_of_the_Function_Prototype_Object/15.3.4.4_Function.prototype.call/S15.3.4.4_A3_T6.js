// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A3_T6;
* @section: 15.3.4.4;
* @assertion: If thisArg is null or undefined, the called function is passed the global object as the this value;
* @description: Argument at call function is null and it called inside function declaration;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.4_A3_T6",

path: "15.3.4.4",

description: "Argument at call function is null and it called inside function declaration",

test: function testcase() {
   function FACTORY(){
  (function(){this.feat="kamon beyba"}).call(null);
};

var obj = new FACTORY;

//CHECK#1
if (this["feat"] !== "kamon beyba") {
  $ERROR('#1: If thisArg is null or undefined, the called function is passed the global object as the this value');
}

//CHECK#2
if (typeof obj.feat !== "undefined") {
  $ERROR('#1: If thisArg is null or undefined, the called function is passed the global object as the this value');
}

 }
});

