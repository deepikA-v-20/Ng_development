// let prom = new Promise(function(resolve,reject)=>{
//     reject("rejected");
//     // if(a<b){
//     //     resolve();
//     // }
//     // else{
//     // reject();
//     // }
// });
// prom.then(
//     (A)=>{
//     console.log("promess");
// });
// // }).catch(function(){
// //     console.log("error");
// // });
let pro = new Promise(function(resolve, reject) {
    let s = 3;
    let z=4
    if (s== z){
        resolve("success");
    } else {
        reject("no");
    }
});

pro.then(function(mess) {
    console.log(mess);
})
.catch(function(err) {
    console.log(err);
});
