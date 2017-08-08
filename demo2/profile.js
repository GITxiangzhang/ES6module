/*

//export 语法1
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
export function multiply(x, y) {
 return x * y;
 };

*/

/*

 //export 语法2
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
 function multiply(x, y) {
 return x * y;
 };
export{multiply,firstName,lastName,year}
*/

/*
//ES6 模块中this 指向 undefined

console.log(this);
console.log(module);

*/


/*
//错误的几种写法
// 报错
export 1;

// 报错
var m = 1;
export m;

*/

/*

//正确写法
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};

*/


/*
//es6 模块是动态引用，不像commonJS 规范会存缓存值。
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);

*/
