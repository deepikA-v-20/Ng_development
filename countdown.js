function count(sec){
    let remaintime = sec;
    const num = setInterval(() =>{
        if(remaintime <=0){
            console.log("times up");
            clearInterval(num);
        }
        else{
            console.log(`Remaining time ${remaintime} sec`);
            remaintime -= 1;
        }
    })
}
count(10);