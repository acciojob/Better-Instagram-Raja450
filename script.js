//your code here
const divs = document.querySelectorAll(".image")

divs.forEach(div=>{
	div.addEventListener('dragstart',(e)=>{
		e.dataTransfer.setData('id', e.target.id)
	})
}) 
divs.forEach(div=>{
	div.addEventListener('dragover',(e)=>{
		e.preventDefault()
	})
	div.addEventListener('drop',(e)=>{
		const drag = document.getElementById(e.dataTransfer.getData('id'))
	    let tid = drag.id
		drag.id = div.id
		div.id = tid
		let temp = div.innerText
		div.innerText  = drag.innerText
		drag.innerText = temp
		console.log(div.innerText, drag.innerText, temp)
	})
})