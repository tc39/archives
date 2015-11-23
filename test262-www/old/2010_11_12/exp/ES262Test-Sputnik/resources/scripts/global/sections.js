//represents the class template for sections
function Section(id, name, subSections) {
    this.id = id;
    this.name = name;
    this.passed = 0;
    this.failed = 0;
    this.total = 0;
    this.subSections = subSections;
    this.testCaseArray = [];
    this.getPassPercentage = function () {
        if (this.total > 0)
            return Math.round((this.passed / this.total) * 100);
        else
            return 0;
    };
}

//array to hold the sections data
var sections = [];

function loadSections()
{
//Chapter 7
sections[0] = new Section(7, "Lexical Conventions", [new Section(7.1, 'Unicode Format Control Character'), new Section(7.2, 'White Space'), new Section(7.3, 'Line Terminators'),
 new Section(7.4, 'Comments '), new Section(7.5, 'Tokens',[new Section('7.5.1','Reserved Words'), new Section('7.5.2','Keywords'), new Section('7.5.3','Future Reserved Words')]), new Section(7.6, 'Reserved Words'), new Section(7.7, 'Punctuators'), new Section(7.8, 'Literals', [new Section('7.8.1','Null Literals'), new Section('7.8.2','Boolean Literals'), new Section('7.8.3', 'Numeric Literals'), new Section('7.8.4', 'String Literals'), new Section('7.8.5','Regular Expression Literals')]), new Section(7.9, 'Automatic Semicolon Insertion', [new Section('7.9.1','Rules of Automatic Semicolon Insertion'), new Section('7.9.2','Examples_of_Automatic_Semicolon_Insertion')])]);

//Chapter 8
sections[1] = new Section(8, "Types", [new Section(8.1, 'The Undefined Type'), new Section(8.2, 'The Null Type'), new Section(8.3, 'The Boolean Type'), new Section(8.4, 'The String Type'),
    new Section(8.5, 'The Number Type'), new Section(8.6, 'The Object Type', [new Section('8.6.1','Property Attributes'),new Section('8.6.2','Internal Properties and Methods')]), new Section(8.7, 'The Reference Specification Type', [new Section('8.7.1','GetValue (V)'), new Section('8.7.2','PutValue(v,w)')]), new Section(8.8, 'The List Specification Type')
    , new Section(8.9, 'The Completion Specification Type'), new Section('8.10', 'The Property Descriptor and Property Identifier Specification Types'),
    new Section(8.11, 'The Lexical Environment and Environment Record Specification Types'), new Section(8.12, 'Algorithms for Object Internal Methods')]);

//Chapter 9
sections[2] = new Section(9, 'Type Conversion and Testing', [new Section(9.1, 'ToPrimitive'), new Section(9.2, 'ToBoolean'), new Section(9.3, 'ToNumber',[new Section('9.3.1','ToNumber from String')]), new Section(9.4, 'ToInteger')
, new Section(9.5, 'ToInt32: (Signed 32 Bit Integer)'), new Section(9.6, 'ToUint32: (Unsigned 32 Bit Integer)'), new Section(9.7, 'ToUint16: (Unsigned 16 Bit Integer)'),
new Section(9.8, 'ToString',[new Section('9.8.1','ToString Applied to the Number Type')]), new Section(9.9, 'ToObject'), new Section('9.10', 'CheckObjectCoercible'), new Section(9.11, 'IsCallable'), new Section(9.12, 'The SameValue Algorithm')]);

//Chapter 10
sections[3] = new Section(10, 'Executable Code and Execution Contexts', [new Section(10.1, 'Types of Executable Code', [new Section('10.1.1','not available'), new Section('10.1.2','not available'), new Section('10.1.3','Variable Instantiation'),new Section('10.1.4','Scope Chain and Identifier Resolution'),new Section('10.1.5','Global Object'), new Section('10.1.6','not available'), new Section('10.1.7','not available'), new Section('10.1.8','Arguments Object')]), new Section(10.2, 'Lexical Environments',[new Section('10.2.1','Global Code'),new Section('10.2.2','Eval Code')]), new Section(10.3, 'Execution Contexts'),
 new Section(10.4, 'Establishing an Execution Context',[new Section('10.4.1','Entering global Code'),new Section('10.4.2','Entering eval Code'),new Section('10.4.3', 'Entering Function Code')]), new Section(10.5, 'Declaration Binding Instantiation'), new Section(10.6, 'Arguments Object ')]);

//Chapter 11
sections[4] = new Section(11, 'Expressions', [new Section(11.1, 'Primary Expressions', [new Section('11.1.1', 'The this Keyword'), new Section('11.1.2', 'Identifier Reference'), new Section('11.1.3', 'not available'), new Section('11.1.4', 'Array Initialiser'), new Section('11.1.5', 'Object Initializer'), new Section('11.1.6', 'The Grouping Operator')]), new Section(11.2, 'Left-Hand-Side Expressions',[new Section('11.2.1', 'Property Accessors'), new Section('11.2.2', 'The new Operator'), new Section('11.2.3', 'Function Calls'), new Section('11.2.4', 'Argument Lists'), new Section('11.2.5', 'Function Expressions')]), new Section(11.3, 'Postfix Expressions',[new Section('11.3.1', 'Postfix Increment Operator'), new Section('11.3.2', 'Postfix Decrement Operator')]),
 new Section(11.4, 'Unary Operators',[new Section('11.4.1','The delete Operator'), new Section('11.4.2','The void Operator'), new Section('11.4.3','The typeof Operator'), new Section('11.4.4','Prefix Increment Operator'), new Section('11.4.5','Prefix Decrement Operator'), new Section('11.4.6','Unary plus Operator'), new Section('11.4.7','Unary minus Operator'), new Section('11.4.8','Bitwise NOT Operator'), new Section('11.4.9','Logical NOT Operator')]), new Section(11.5, 'Multiplicative Operators',[new Section('11.5.1','Applying the asterisk Operator'), new Section('11.5.2','Applying the slash Operator'),new Section('11.5.3','Applying the percent Operator')]), new Section(11.6, 'Additive Operators',[new Section('11.6.1','The Addition operator'), new Section('11.6.2','The Subtraction operator'), new Section('11.6.3','Applying the Additive Operators to Numbers')]), new Section(11.7, 'Bitwise Shift Operators',[new Section('11.7.1','The Left shift Operator'), new Section('11.7.2','The Sign Left shift Operator'), new Section('11.7.3','The Unsigned Right Shift Operator')]),
 new Section(11.8, 'Relational Operators', [new Section('11.8.1', 'The Less than Operator'), new Section('11.8.2', 'The Greater than Operator'), new Section('11.8.3', 'The Less than or equal Operator'), new Section('11.8.4', 'The Grater than or equal Operator'), new Section('11.8.5', 'not available'), new Section('11.8.6', 'The instanceof operator'), new Section('11.8.7', 'The in operator')]), new Section(11.9, 'Equality Operators', [new Section('11.9.1', 'The Equals Operator'), new Section('11.9.2', 'The Does not equals Operator'), new Section('11.9.3', 'The Abstract Equality Comparison Algorithm'), new Section('11.9.4', 'The Strict Equals Operator'), new Section('11.9.5', 'The Strict Does not equals Operator'), new Section('11.9.6', 'The Strict Equality Comparison Algorithm')]), new Section('11.10', 'Binary Bitwise Operators', [new Section('11.10.1', 'AND Operator'), new Section('11.10.1', 'The And Operator'), new Section('11.10.2', 'The Xor Operator'), new Section('11.10.2', 'XOR Operator'), new Section('11.10.3', 'OR Operator')]), new Section(11.11, 'Binary Logical Operators', [new Section('11.11.1', 'Logical AND Operator'), new Section('11.11.2', 'Logical OR Operator')]),
 new Section(11.12, 'Conditional Operator ( ? : )'), new Section(11.13, 'Assignment Operators',[new Section('11.13.1','Simple Assignment'), new Section('11.13.2','Compound Assignment')]), new Section(11.14, 'Comma Operator ( , )')]);

//Chapter 12
sections[5] = new Section(12, 'Statements', [new Section(12.1, 'Block'), new Section(12.2, 'Variable Statement',[new Section('12.2.1', 'Variable Statement')]), new Section(12.3, 'Empty Statement'), new Section(12.4, 'Expression Statement'),new Section(12.5, 'The if Statement'), new Section(12.6, 'Iteration Statements',[new Section('12.6.1','The do while Statement'), new Section('12.6.2','The while statement'), new Section('12.6.3','The for Statement'), new Section('12.6.4','The for in Statement')]), new Section(12.7, 'The continue Statement'), new Section(12.8, 'The break Statement'),
new Section(12.9, 'The return Statement'), new Section('12.10', 'The with Statement',[new Section('12.10.1', 'Strict Mode Restrictions')]), new Section(12.11, 'The switch Statement'), new Section(12.12, 'Labelled Statements'),
new Section(12.13, 'The throw Statement'), new Section(12.14, 'The try Statement'), new Section(12.15, 'The debugger statement')]);

//Chapter 13
sections[6] = new Section(13, 'Function Definition', [new Section(13.1, 'Strict Mode Restrictions'), new Section(13.2, 'Creating Function Objects ',[new Section("13.2.1",'Call'), new Section("13.2.2",'Construct')]), new Section(13.3, 'Program')]);

//Chapter 14
sections[7] = new Section(14, 'Program', [new Section(14.1, 'Directive Prologues and the Use Strict Directive')]);

//chapter 15
sections[8] = new Section(15, 'Standard Built-in ECMAScript Objects', [new Section(15.1, 'The Global Object', [new Section('15.1.1', 'Value Properties of the Global Object'), new Section('15.1.2', 'Function Properties of the Global Object'), new Section('15.1.3', 'URI Handling Function Properties')]), new Section(15.2, 'Object Objects', [new Section('15.2.1', 'The Object Constructor Called as a Function'), new Section('15.2.2', 'The Object Constructor'), new Section('15.2.3', 'Properties of the Object Constructor'), new Section('15.2.4', 'Properties of the Object Prototype Object')]), new Section(15.3, 'Function Objects', [new Section('15.3.1', 'The Function Constructor Called as a Function'), new Section('15.3.2', 'The Function Constructor'), new Section('15.3.3', 'Properties of the Function Constructor'), new Section('15.3.4', 'Properties of the Function Prototype Object'), new Section('15.3.5', 'Properties of Function Instances')]),
new Section(15.4, 'Array Objects', [new Section('15.4.1', 'The Array Constructor Called as a Function'), new Section('15.4.2', 'The Array Constructor'), new Section('15.4.3', 'Properties of the Array Constructor'), new Section('15.4.4', 'Properties of the Array Prototype Object'), new Section('15.4.5', 'Properties of Array Instances')]), new Section(15.5, 'String Objects', [new Section('15.5.1', 'The String Constructor Called as a Function'), new Section('15.5.2', 'The String Constructor'), new Section('15.5.3', 'Properties of the String Constructor'), new Section('15.5.4', 'Properties of the String Prototype Object'), new Section('15.5.5', 'Properties of String Instances')]), new Section(15.6, 'Boolean Objects', [new Section('15.6.1', 'The Boolean Constructor Called as a Function'), new Section('15.6.2', 'The Boolean Constructor'), new Section('15.6.3', 'Properties of the Boolean Constructor'), new Section('15.6.4', 'Properties of the Boolean Prototype Object')]), new Section(15.7, 'Number Objects', [new Section('15.7.1', 'The Number Constructor Called as a Function'), new Section('15.7.2', 'The Number Constructor'), new Section('15.7.3','Properties of Number Constructor'), new Section('15.7.4','Properties of the Number Prototype Object'), new Section('15.7.5','Properties of Number Instances')]), new Section(15.8, 'The Math Object',[new Section('15.8.1','Value Properties of the Math Object'), new Section('15.8.2','Function Properties of the Math Object')]),
new Section(15.9, 'Date Objects', [new Section('15.9.1','Overview of Date Objects and Definitions of Abstract Operators'), new Section('15.9.2','The Date Constructor Called as a Function'), new Section('15.9.3','The Date Constructor'), new Section('15.9.4','Properties of the Date Constructor'), new Section('15.9.5','Properties of the Date Prototype Object')]), new Section('15.10', 'RegExp (Regular Expression) Objects',[new Section('15.10.1','Patterns'), new Section('15.10.2','Pattern Semantics'), new Section('15.10.3','The RegExp Constructor Called as a Function'), new Section('15.10.4','The RegExp Constructor'), new Section('15.10.5','Properties of the RegExp Constructor'), new Section('15.10.6','Properties of the RegExp Prototype Object'), new Section('15.10.7','Properties of RegExp Instances')]), new Section(15.11, 'Error Objects',[new Section('15.11.1','The Error Constructor Called as a Function'), new Section('15.11.2','The Error Constructor'), new Section('15.11.3','Properties of the Error Constructor'), new Section('15.11.4','Properties of the Error Prototype Object')]), new Section(15.12, 'The JSON Object',[new Section('15.12.1','The JSON Grammar'),new Section('15.2.2', 'Parse(Text[,Reviver])'),new Section('15.12.3', 'Stringify')])]);
}