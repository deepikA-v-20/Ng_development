function outer(){
    let val="welcome"
    function inner(b){
        console.log("welcome");
        return b;
    }
    return inner;
}
// let z=outer();
// console.log(z("Home"));

function outer(){
    function inner(a){
        return function(){
            return a;
        }
    }
    let arr=[];
    let i;
    for(i=0;i<4;i++){
        arr[i]=inner(i);

    }
    return arr;
}
let y=outer();
console.log(y[0]());
console.log(y[1]());
console.log(y[2]());
console.log(y[3]());
