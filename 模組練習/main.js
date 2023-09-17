// // 一次性引入
// import echo, {data , obj} from "./lib.js";


// // import echo from "./lib.js";

// let name = "Hello Dennis";
// echo(name);

// // import { data , obj} from "./lib.js";
// console.log(data);
// console.log(obj);

//=========================================================

// 一次引入
import math from "./lib.js"

math.add(2, 6);
math.mul(-7, 6);

// 分開引入
import { add,mul } from "./lib.js"
add(5, 5);
mul(5, -10);