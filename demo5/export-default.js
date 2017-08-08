//不能混合应用
export default function foo() {
    console.log('foo');
};
export var PI=3.1415;
export function circle(r){
    return PI*r*r;
}


/*
var PI=3.1415;
function circle(r){
    return PI*r*r;
}
module.exports=circle;
module.exports=PI;*/
