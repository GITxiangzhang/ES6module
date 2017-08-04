var examples=require('./example.js').message="hello";
var fs=require('fs');
delete require.cache[require.resolve('./example.js')];
examples=require('./example.js');
console.log(fs);


/*console.log(examples);
console.log(this);
console.log("x:"+examples.x);
console.log(examples.addX(5));
console.log(module);
console.log(examples.foo);*/
