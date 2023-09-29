const images = document.querySelectorAll(".image");
const flex = document.querySelector(".flex");

flex.addEventListener('dragstart',dragStart);
flex.addEventListener('dragend',dragEnd);

for(const image of images){
    image.addEventListener('dragover', dragOver);
    image.addEventListener('dragenter', dragEnter);
    image.addEventListener('dragleave', dragLeave);
    image.addEventListener('drop', dragDrop);
}

function dragDrop(){
    this.className = 'image';
    this.append(image);
}
function dragLeave(){
   this.className = 'image';
}
function dragEnter(e){
    e.preventDefault();
    this.className += 'selected'

}
function dragOver(e){
    e.preventDefault();
}
function dragEnd(){
    this.className = 'image'
}
function dragStart(){
    this.className += 'selected';
    setTimeout(()=> this.className = 'invisible', 0);
}