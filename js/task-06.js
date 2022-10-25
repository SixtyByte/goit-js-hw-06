const mainInput=document.querySelector('#validation-input');
mainInput.addEventListener("blur",checkInput);

const allGood="valid";
const noGood=`invalid`
console.log(mainInput.value.length)
function checkInput(){if (mainInput.value.length===Number(mainInput.dataset.length)){mainInput.classList.add(`${allGood}`);mainInput.classList.remove(`${noGood}`)}else{mainInput.classList.add(`${noGood}`);mainInput.classList.remove(`$`)}

} 

