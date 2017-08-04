var x = 5;
var addX = function (value) {
    return value + x;
};
var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
module.exports.x=x;
module.exports.addX=addX;
module.exports.foo=foo;

/*console.log(module);
console.log(exports);*/

/*
console.log(module);
console.log(this);
console.log(module.exports===this);*/
