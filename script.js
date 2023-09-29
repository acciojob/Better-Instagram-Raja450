//your code here
const parent = document.querySelector('#parent');
const images = document.querySelectorAll('.image');
console.log(parent , images)
images.forEach(image =>{
    console.log(image)
    image.addEventListener('dragstart', ()=>{
        image.classList.add('dragging');
    })

    image.addEventListener("dragend", ()=>{
        image.classList.remove('dragging');
    })
})

const rearrangeImage = (e) => {
    e.preventDefault();
    const currentDraggingElement = document.querySelector(".dragging");
    const siblings = [...document.querySelectorAll('.image:not(.dragging)')]
    // console.log(currentDraggingElement , siblings)
    const nextSibling = siblings.find(sibling => {
        // console.log(e.clientX , sibling.offsetLeft + (sibling.offsetWidth/2))
        return e.clientX <= (sibling.offsetLeft )
    })
    // console.log(nextSibling);
    parent.insertBefore(currentDraggingElement , nextSibling)
    
}

parent.addEventListener('dragover', rearrangeImage);
parent.addEventListener('dragenter', e =>  e.preventDefault())