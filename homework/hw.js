// // console.log("hello footer")
// // const arr=['a','b','c','d'];
// // for(let i of arr){
// //     console.log(i);
// // }
// // let s = new Set([1,2,3,3,3]);
// // const mp = new Map([
// //     ["name","hgk"],
// //     ["age",12]]
// // );
// // for(let [key,value] of mp){
// //     console.log("${value} ");
// // }

// // const age=8;
// // const resul=age<18? "child": age < 20 ? "young": "senior";
// // // console.log(resul);

// // 1. accessing the element in the array 
// // Using the Index 

// // 2. accessing the first element

// // 3. aceessing the last element

// // 4. Modifying the array elements

// // 5. Adding elements to an array 

// // 6. Removing elements from an array 

// // 7. Array Length 

// // 8. Increase and decrease of the array Length

// // 9. Iterating through the array elements

// // 10. Array Concatenation 

// // 11. Conversion of an array to a string 

// // 12. CHeck the type of an array
  

// const arr = [1,2,3,4,5];

// console.log(" accessing the element in the array ");
// for(let i in arr){
//     console.log(arr[i]);
// }
// console.log("accessing the first element",arr[0]);
// console.log("accessing the last element",arr[arr.length-1]);
// arr.push(6);
// console.log("Adding elements to an array",arr);
// arr.pop();
// console.log("Removing elements from an array",arr);
// console.log("Array Length ",arr.length);
// arr.length=9;
// console.log("Increase and decrease of the array Length",arr);
// arr.length=4;
// console.log("Increase and decrease of the array Length",arr);
// let arr1=[55,555,55];
// console.log("Array Concatenation ",arr.concat(arr1));
// console.log("Conversion of an array to a string",arr.toString());
// console.log("CHeck the type of an array",typeof arr);
// let dat = new Date();
// let form = new Intl.DateTimeFormat("en-us").format(dat); 
// console.log(form.setDate(form.getDate()+12));
// let dat = new Date();

// dat.setDate(dat.getDate() + 12);
// let form = new Intl.DateTimeFormat("en-us").format(dat);

// console.log(form);
// function fun(num1,num2,num3){}
// let result = num1>num2 ? 
//                  (num1>num3? num1 : num3):
//                  num2>num3 ? num2 : num3;

// // let a = 5, b = 10, c = 7;

// // let max = (a > b) 
// //             ? (a > c ? a : c) 
// //             : (b > c ? b : c);

// // console.log(max);
// // let arr = [1,3,7,0,4,3];
// function fun(arr){
// let i=0;
// for(let j=0;j<arr.length;j++){
//     if(arr[j] != 0 ){
//         [arr[i],arr[j]] = [arr[j],arr[i]];
//         i++;
//     }
// }
//     return arr;
// }
// let arr = [1,3,7,0,4,3];
// fun(arr);
// console.log(arr);

// function fun(arr) {
//     let i = 0;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] !== 0) {
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             i++;
//         }
//     }
//     return arr;
// }

// let arr = [1, 3, 7, 0, 4, 3];
// fun(arr);
// console.log(arr);

let S ="aa";
let b ='alngler';
// let h = new String("world")
// console.log(S.concat(b));
// console.log(b.toLowerCase());
// console.log(h.toUpperCase());
// let str = "Hwelcome to js World";
// let index = str.indexOf("World");
// console.log(index);
// console.log(str.substring(1,8));
// let a = "   3hf  huh";
// console.log(a.trim());
// console.log(a.replace("3hf","welcome"))
// let newLineStr = "Hello\nWorld";
// console.log(newLineStr)
console.log(b.replace('a',''));
// header fotter content profile