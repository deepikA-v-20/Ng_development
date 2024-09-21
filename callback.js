let number=["apple","banana","grapes"];
function mainfunc(callback){
    console.log("operation performing...");
    number.forEach(callback);
}
function callbackFunction(number){
    // console.log("resukt"+number);
    alert(number)
}
mainfunc(callbackFunction);