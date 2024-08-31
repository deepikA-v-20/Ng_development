// // // let student={
// // //     details: function(name,id){
// // //         return this.class+" "+name+" "+id;
// // //     },
// // // };
// // // let emp1={
// // //     class:12
// // // };

// // // let x = student.details.call(emp1,"deepika",1001);
// // // // console.log(x);

// // // let mult=function mult(a,){
// // //     return a+10;
// // // }
// // // // let b = 32;
// // // let add = function add(a,b=4){
// // //     return a+b;
// // // }
// // // console.log("pure: "+ mult(12));
// // // console.log("Default " + add(3));
// // function add(num1,num2=2){
// //     return num1+num2;
// // }
// // function sub(num1,num2=2){
// //     return num1-num2;
// // }
// // function div(num1,num2=2){
// //     return num1/num2;
// // }
// // function mul(num1,num2=2){
// //     return num1*num2;
// // }
// // let ch = 2;
// // switch(ch){
// //     case "1":
// //         console.log(add(4));
// //         break;
// //     case 2:
// //         console.log(mul(3));
// //         break;
// //     case 3:
// //         console.log(sub(2));
// //         break;
// //     case 4:
// //         console.log(div(2));
// // }

// // function parameter(){
// //     let i;
// //     let max=-Infinity;
// //     for(i=0;i<arguments.length;i++){
// //         if(arguments[i]>max){
// //             max=arguments[i];
// //         }
// //     }
// //     return max;
// // }
// // console.log(parameter(2,3,1,3,7,2,2,28,8));m
// let person={
//     name:"deepika",
//     afe : 20,
//     address:{
//         city:"XXX",
//         state:"YYY"
//     }
// };
// function get(person){
//     return person.address.state;
// }
// person.email="test@example.com";

// // console.log("state"+ get(person));
//  
function value(num){
    num.val="new";
    console.log("inside"+num);
}
let num={val:"old"};
value(num);
console.log("out: "+num);