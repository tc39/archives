// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.2.1_A1_T1;
* @section: 15.3.2.1, 13.2;
* @assertion: When the Function constructor is called with one argument then body be that argument and the following steps are taken:
* i) Call ToString(body)
* ii) If P is not parsable as a FormalParameterListopt then throw a SyntaxError exception
* iii) If body is not parsable as FunctionBody then throw a SyntaxError exception
* iv) Create a new Function object as specified in 13.2 with parameters specified by parsing P as a FormalParameterListopt and body specified by parsing body as a FunctionBody. 
* Pass in a scope chain consisting of the global object as the Scope parameter
* v) Return Result(iv);
* @description: The body of the function is "{toString:function(){throw 7;}}";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.2.1_A1_T1",

path: "15.3.2.1, 13.2",

description: "The body of the function is \"{toString:function(){throw 7;}}\"",

test: function testcase() {
   var body = {toString:function(){throw 7;}}

//CHECK#1
try {
  var f = new Function(body);
  $FAIL('#1: When the Function constructor is called with one argument then body be that argument the following step are taken: call ToString(body)');
} catch (e) {
  if (e !== 7) {
  	$ERROR('#1.1: When the Function constructor is called with one argument then body be that argument the following step are taken: call ToString(body)');
  }
}

 }
});

