// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.11_A1_T16;
* @section: 15.5.4.11;
* @assertion: String.prototype.replace (searchValue, replaceValue);
* @description: Instance is Number, searchValue is regular expression;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.11_A1_T16",

path: "15.5.4.11",

description: "Instance is Number, searchValue is regular expression",

test: function testcase() {
   var __re = /77/;

var __instance = new Number(1100.00777001);

Number.prototype.replace = String.prototype.replace;

var __obj = {toString:function(){return function(a1,a2,a3){return a2+"z"};}}
//__obj = function(a1,a2,a3){return a2+"z"};


//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  var x = __instance.replace(__re, __obj) === "1100.007z7001";
  $FAIL('#1.0: x = __instance.replace(__obj, 1) === "1100.007z7001" lead to throwing exception');
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1.1: Exception is instance of TypeError. Actual: '+e);
  }
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

