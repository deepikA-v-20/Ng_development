const fill = document.querySelector(".fill");
const empty = document.querySelectorAll(".empty");
const dragStart= function(){
    this.className+=" hold";
    setTimeout(() => (this.className="invisble"),0);
}
const dragEnd=function(){
    this.className="fill";
}
const dragOver = function(e){
    e.preventDefault();
}
const DragEnter = function(e){
    e.preventDefault();
    this.className+=" hovered";
}
const dragLeave = function(){
    this.className="empty";
}
const dragDrop = function(){
    this.className="empty";
    this.append(fill);
}
fill.addEventListener("drag",dragStart);
fill.addEventListener("dragend",dragEnd);

for(const i of empty){
    i.addEventListener("dragOver",dragOver);
    i.addEventListener("dragEnter",dragEnter);
    i.addEventListener("dragLeave",dragLeave);
    i.addEventListener("drop",dragDrop);
}