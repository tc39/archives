// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.13_A1_T10;
* @section: 15.10.2.13;
* @assertion: The production CharacterClass :: [ [lookahead \notin {^}] ClassRanges ] evaluates by evaluating ClassRanges to obtain a CharSet and returning that CharSet and the boolean false;
* @description: Execute /[a-c\d]+/.exec("\n\n\abc324234\n") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.13_A1_T10",

path: "15.10.2.13",

description: "Execute /[a-c\\d]+/.exec(\"\\n\\n\\abc324234\\n\") and check results",

test: function testcase() {
   __executed = /[a-c\d]+/.exec("\n\n\abc324234\n");

__expected = ["abc324234"];
__expected.index = 2;
__expected.input = "\n\n\abc324234\n";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /[a-c\\d]+/.exec("\\n\\n\\abc324234\\n"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /[a-c\\d]+/.exec("\\n\\n\\abc324234\\n"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /[a-c\\d]+/.exec("\\n\\n\\abc324234\\n"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /[a-c\\d]+/.exec("\\n\\n\\abc324234\\n"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

