// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.9_A3_T2;
* @section: 11.4.9;
* @assertion: Operator !x returns !ToBoolean(x);
* @description: Type(x) is number primitive or Number object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.9_A3_T2",

path: "11.4.9",

description: "Type(x) is number primitive or Number object",

test: function testcase() {
   //CHECK#1
if (!0.1 !== false) {
  $ERROR('#1: !0.1 === false');
}

//CHECK#2
if (!new Number(-0.1) !== false) {
  $ERROR('#2: !new Number(-0.1) === false');
}

//CHECK#3
if (!NaN !== true) {
  $ERROR('#3: !NaN === true');
}

//CHECK#4
if (!new Number(NaN) !== false) {
  $ERROR('#4: !new Number(NaN) === false');
}

//CHECK#5
if (!0 !== true) {
  $ERROR('#5: !0 === true');
}

//CHECK#6
if (!new Number(0) !== false) {
  $ERROR('#6: !new Number(0) === false');
}

//CHECK#7
if (!Infinity !== false) {
  $ERROR('#7: !Infinity === false');
}

 }
});

