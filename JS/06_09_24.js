function reg(){
    let str = "welcomwMUIKN to javascript,M,M,N,O ";
    let a = /[M-P]/g;
    console.log(str.match(a));
}
// reg();

function sear(){
    let str ="welcome More to js";
    let a =/M/i;
    console.log(str.search(a));
}
// sear();
function a(){
    let arr=[1,2,3];
    let m = arr.map(i=>i*3);
    console.log(m);
    let b = m.filter(i => i%9==0);
    console.log(b);
    let c = b.reduce((i,j) => i+j,0);
    console.log(c);
}
// a();

function rep(){
    let str ="geeks for  geeks part 1346";
    let repl=/[A-M]/gi;
    let ans = str.match(repl);
    
    console.log(ans);
}
rep();
