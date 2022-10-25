const plusButton=document.querySelector(` button[data-action="increment"]`)
console.log(plusButton)
const minusButton=document.querySelector(`button[data-action="decrement"]`)
console.log(minusButton)
const clickMetr=document.querySelector("#value")
console.log (clickMetr)
let counterValue=0
plusButton.addEventListener(`click`,handlePlusClick)
minusButton.addEventListener(`click`,handleMinusClick)


function handlePlusClick() {clickMetr.textContent=`${counterValue}`;
counterValue+=1;
}
function handleMinusClick(){clickMetr.textContent=`${counterValue}`;counterValue-=1;}

