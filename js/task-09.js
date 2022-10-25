
const magicButton=document.querySelector(`.change-color`)

const colorText=document.querySelector(`.color`)
console.log(colorText.textContent)
magicButton.addEventListener(`click`, clickmagic);
function clickmagic(){
const colorGen = getRandomHexColor();

document.body.setAttribute('style', `background-color:${colorGen}`)
colorText.textContent=colorGen
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
