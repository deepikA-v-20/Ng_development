//Argument function
// let a = function(s){
//     console.log(s.replace('a','e'));
// }
// a('replace');
// let j = function(s,n){
//         console.log(s.charAt(n));
    
// }
// j("string passed",2);

// let h = function(s1,s2){
// console.log(s1.concat(s2));
// }

// h("welcome","home");
//empty
// let h = ()=>{
//     console.log("ffgf");
// }
// h();
// //parameter
// let sing=(x)=>{
//     console.log(x*x);
// }
// sing(4);
// //default
// let def =(c,x=9)=>{
//     console.log(c+x);
// }
// def(2);
// //return object literals

// let obj=(f,l)=>({
//     sub:f,id:l});
// console.log("DBMS","22");
// let single = (x)=>{
//     console.log("addition ",x+x);
// }
// let multi = (x,y) => {
//     console.log("Multi",x*y);
// }
// let no = ()=>{
// console.log("No parameter");
// }
// let defaul = (x,y=2)=>{
// console.log(x/y);
// }
// single(3);
// multi(3,4);
// no();
// defaul(4);

// //Nested Function
// function fun1(a){
//     function fun2(b){
//         return a+b;
//     }
//     function fun3(c){
//         return a*c;
//     }
//     return {
//         add:fun2,
//         mult:fun3
//     };
// }
// const res = fun1(2);
// console.log(res.add(2));

// map
const a =[1,2,3,4];
const m = a.map(i => i*2);
const x = m.filter(i=>i%2==0);
console.log(x,m);

const st=[
    {
        name:"deepz",marks:95},
        {name:"kjejf",marks:55}
]
const studen = st.filter((i) => i.marks==95);
console.log(studen);

function postove(val){
    return val>0;
}
let fil=[1,3,-3,-33].filter(postove);
console.log(fil);

const num=[4,9,25,16];
const an = num.map(i =>Math.sqrt(i));
console.log(an);

const numbers = [1.2, 2.5, 3.8, 4.1, 5.6];

const ang = numbers.reduce((acc, num) => {
    console.log(Math.round(num)); 
    return acc; 
}, 0); // Initial value for the accumulator (not really needed in this case)
