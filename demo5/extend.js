/*
//不能同时应用
var exp=require('./export-default.js');
import {PI} from './export-default'
console.log(PI)
console.log(exp.PI)

*/

/*

//import 输入CommonJS模块
import {PI,circle} from './export-default';

console.log(PI)
console.log(circle(2))

*/


/*
//import commonjs 模块
import * as baz from './export-default';
console.log(baz);//baz本身是一个对象，不能当作函数调用，只能通过baz.default调用

*/

/*

import  baz from './export-default';
console.log(baz);

*/

/*
//require ES6 模块
var dexport=require('./export-default');
console.log(dexport);

*/
