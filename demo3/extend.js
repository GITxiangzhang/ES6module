/*//1.export default
import somefun,{PI,circle} from './export-default';
//export default本质过程
/!*import {default as somefun,PI,circle} from './export-default';*!/

// 整体模块加载
/!*import * as expt from './export-default';
    console.log(expt.PI);
    console.log(expt.circle(2));
    console.log(expt.default());
*!/

console.log(somefun());
console.log(PI);
console.log(circle(2));*/

//2.模块继承 export import 复合写法
/*export * as expt from './export-default';//报错*/
/*import * as expt from './export-default';
export {expt};*/

/*export * from './export-default';//复合写法整体加载不可用as 重命名 且忽略default*/


/*export {default,PI,circle} from './export-default';//复合写法模块却取不到引用模块的输出，这里可以用as 重命名*/

/*import foo,{PI,circle} from './export-default';// 拆开写可以取到引用的模块输出
export {PI,circle};
export default foo;*/

/*export default function(){
    console.log('我是子模块！')
}*/
/*console.log(PI);
console.log(circle(2));
console.log(foo());*/
