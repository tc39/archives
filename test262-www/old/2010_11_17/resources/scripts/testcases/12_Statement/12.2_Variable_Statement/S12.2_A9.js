// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.2_A9;
* @section: 12.2;
* @assertion: When using property attributes, {DontEnum} is not used;
* @description: Enumerating property attributes of "this" and then searching for the declared variable;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.2_A9",

path: "12.2",

description: "Enumerating property attributes of \"this\" and then searching for the declared variable",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
for (__prop in this){
    if (__prop === "__declared__var")
        enumed=true;
}
if (!(enumed)) {
	$ERROR('#1: When using property attributes, {DontEnum} not used');
}
//
//////////////////////////////////////////////////////////////////////////////

var __declared__var;

 }
});

