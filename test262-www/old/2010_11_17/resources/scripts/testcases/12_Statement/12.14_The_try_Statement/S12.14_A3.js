// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.14_A3;
 * @section: 12.14;
 * @assertion: Catching system exception with "try" statement;
 * @description: Checking if execution of "catch" catches system exceptions;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.14_A3",

path: "12.14",

description: "Checking if execution of \"catch\" catches system exceptions",

test: function testcase() {
   // CHECK#1
try{
  y;
  $ERROR('#1: "y" lead to throwing exception');
}
catch(e){}

// CHECK#2
var c2=0;
try{
  try{
    someValue;
    $ERROR('#3.1: "someValues" lead to throwing exception');
  }
  finally{
    c2=1;
  }
}
catch(e){
  if (c2!==1){
    $ERROR('#3.2: "finally" block must be evaluated');
  }
}

// CHECK#3
var c3=0,x3=0;
try{
  x3=someValue;
  $ERROR('#3.1: "x3=someValues" lead to throwing exception');
}
catch(err){  	
  x3=1;
}
finally{
  c3=1;
}
if (x3!==1){
  $ERROR('#3.2: "catch" block must be evaluated');
}
if (c3!==1){
  $ERROR('#3.3: "finally" block must be evaluated');
}

 }
});

