import {PAGE_SIZE, sum} from "./12-modules-export";
//import * as importsA from "./12-modules-export";

// const pageSize = importsA.PAGE_SIZE;
const pageSize = PAGE_SIZE;
console.log(pageSize); // 100

// console.log(importsA.sum(2,2));
console.log(sum(2,2));