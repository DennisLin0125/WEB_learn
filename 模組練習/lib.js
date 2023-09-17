// function echo (msg){
//     console.log(msg);
// }

// // export default echo;

// let data = [5,6,7];
// let obj = {
//     x: 100,
//     y: 10
// }

// // export {data ,obj};

// // 一次性匯出
// export {
//     echo as default,
//     data,
//     obj
// }

//===============================================

let add = function(x, y){
    console.log(x + y);
}

let mul = function(x, y){
    console.log( x * y);
}

let math = {
    add,
    mul
}

// 一次匯出
export default math;
// 分開匯出
export {add, mul};