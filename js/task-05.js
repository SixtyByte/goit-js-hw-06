const inputName=document.querySelector("#name-input")
const out =document.querySelector("#name-output")


inputName.addEventListener("input",result);
function result() {
out.textContent=inputName.value;
if(out.textContent===""){out.textContent='Anonymous'}
}