const inputControl=document.querySelector(`#font-size-control`)
const textSize=document.querySelector(`#text`)
console.log(inputControl)

inputControl.addEventListener('input',changeSize)

function changeSize() {
let val= inputControl.value;
textSize.style.fontSize=val+`px`

    
}