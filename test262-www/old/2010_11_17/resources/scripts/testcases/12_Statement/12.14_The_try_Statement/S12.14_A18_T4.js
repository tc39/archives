// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.14_A18_T4;
 * @section: 12.14, 12.13;
 * @assertion: Catching objects with try/catch/finally statement;
 * @description: Catching string; 
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.14_A18_T4",

path: "12.14, 12.13",

description: "Catching string",

test: function testcase() {
   // CHECK#1
try{
  throw "exception #1";
}
catch(e){
  if (e!=="exception #1") $ERROR('#1: Exception ==="exception #1". Actual:  Exception ==='+ e  );
}

// CHECK#2
try{
  throw "exception"+" #1";
}
catch(e){
  if (e!=="exception #1") $ERROR('#2: Exception ==="exception #1". Actual:  Exception ==='+ e  );
}

// CHECK#3
var b="exception #1";
try{
  throw b;
}
catch(e){
  if (e!=="exception #1") $ERROR('#3: Exception ==="exception #1". Actual:  Exception ==='+ e  );
}

// CHECK#4
var a="exception";
var b=" #1";
try{
  throw a+b;
}
catch(e){
  if (e!=="exception #1") $ERROR('#4: Exception ==="exception #1". Actual:  Exception ==='+ e  );
}

 }
});

