// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.7_A4;
* @section: 11.8.7, 9.8;
* @assertion: Operator "in" calls ToString(ShiftExpression);
* @description: Checking ToString coversion;;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.7_A4",

path: "11.8.7, 9.8",

description: "Checking ToString coversion",

test: function testcase() {
   //CHECK#1
var object = {};
object["true"] = 1;
if (true in object !== "true" in object) {  
  $ERROR('#1: "var object = {}; object["true"] = 1; true in object === "true" in object');  
}

//CHECK#2
var object = {};
object.Infinity = 1;
if (Infinity in object !== "Infinity" in object) {  
  $ERROR('#2: "var object = {}; object.Infinity = 1; Infinity in object === "Infinity" in object');  
}

//CHECK#4
var object = {};
object.undefined = 1;
if (undefined in object !== "undefined" in object) {  
  $ERROR('#4: "var object = {}; object.undefined = 1; undefined in object === "undefined" in object');  
}

//CHECK#5
var object = {};
object["null"] = 1;
if (null in object !== "null" in object) {  
  $ERROR('#5: "var object = {}; object["null"] = 1; null in object === "null" in object');  
}

 }
});

