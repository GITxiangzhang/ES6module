/*export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;*/

var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export{firstName,lastName,year}
export function multiply(x, y) {
    return x * y;
};
console.log(this);
console.log(module);
/*
// 报错
export 1;

// 报错
var m = 1;
export m;*/

/*// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};*/
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);



console.log('我执行了自己');