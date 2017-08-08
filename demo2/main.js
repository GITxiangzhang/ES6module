
/*

//相当于执行了profile模块。
import  './profile';

*/
/*

 //正常引用
 import  {multiply,firstName,lastName,year} from './profile';
 console.log(multiply)
 console.log(firstName)

 */

/*

//import 值会动态变化
import  {foo} from './profile';
setTimeout(() => {console.log(foo);}, 500);

*/

/*
 //import 编译阶段就确定，不能放在任何执行语句中。会报错
if (x === 1) {
import {firstName, lastName, year,multiply,foo} from './profile';
}

*/
