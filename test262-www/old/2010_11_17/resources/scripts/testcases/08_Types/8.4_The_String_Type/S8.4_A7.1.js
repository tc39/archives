// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.4_A7.1;
 * @section: 8.4, 7.8.4;
 * @assertion: <LF> between chunks of one string not allowed;
 * @description: Insert <LF> between chunks of one string;
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.4_A7.1",

path: "8.4, 7.8.4",

description: "Insert <LF> between chunks of one string",

test: function testcase() {
  try {
     (function() {
         eval("var x = asdf\u000Aghjk");
 })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});
