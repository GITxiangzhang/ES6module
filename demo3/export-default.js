/*//1. exportdefault
export default function foo() {
    console.log('foo');
};
export var PI=3.1415;
export function circle(r){
    return PI*r*r;
}*/
//export default本质过程
/*function foo() {
    console.log('foo');
}
export {foo as default}*/
//export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
/*export default var a = 1; //报错*/

//2 export import复合写法
export default function foo() {
    console.log('foo');
};
export var PI=3.1415;
export function circle(r){
    return PI*r*r;
}


