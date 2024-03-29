// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A1.1_T2;
* @section: 12.5;
* @assertion: 0, null, undefined, false, empty string, NaN in expression is evaluated to false;
* @description: Using "if/else" construction;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A1.1_T2",

path: "12.5",

description: "Using \"if/else\" construction",

test: function testcase() {
   var c=0;
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(0)
	$ERROR('#1.1: 0 in expression is evaluated to false ');
else
  c++;
if (c!=1) $ERROR('#1.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(false)
    $ERROR('#2.1: false in expression is evaluated to false ');
else
  c++;
if (c!=2) $ERROR('#2.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(null)
	$ERROR('#3.1: null in expression is evaluated to false ');
else
  c++;
if (c!=3) $ERROR('#3.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(undefined)
	$ERROR('#4.1: undefined in expression is evaluated to false ');
else
  c++;
if (c!=4) $ERROR('#4.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if("")
    $ERROR('#5.1: empty string in expression is evaluated to false ');
else
  c++;
if (c!=5) $ERROR('#5.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#6
if(NaN)
    $ERROR('#6.1: NaN in expression is evaluated to false ');
else
  c++;
if (c!=6) $ERROR('#6.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

 }
});

