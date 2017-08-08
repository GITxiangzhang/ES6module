/*

//ES6 循环加载1
import {foo} from './a.js';
console.log('b.js');
console.log(foo);
export let bar = 'bar';
*/

/*
//ES6 循环加载2
import {foo} from './a.js';
export function bar() {
    console.log('bar');
    if (Math.random() > 0.5) {
        foo();
    }
}
*/
