const plusButton=document.querySelector(` button[data-action="increment"]`)
const minusButton=document.querySelector(`button[data-action="decrement"]`)
const clickMetr=document.querySelector("#value")
let counterValue=0;
plusButton.addEventListener(`click`,handlePlusClick)
function handlePlusClick() {clickMetr.textContent=`${counterValue}`;
counterValue+=1;
document.getElementById(`value`).textContent=counterValue;
}
minusButton.addEventListener(`click`,handleMinusClick)
function handleMinusClick(){clickMetr.textContent=`${counterValue}`;counterValue-=1;
document.getElementById(`value`).textContent=counterValue;}

