
const categoryItem = document.querySelector('#categories');

let listItem = categoryItem.querySelectorAll('.item');
console.log(listItem)
console.log (`Number of categories: ${listItem.length}`)
for (let i=0; i<listItem.length; i+=1){
console.log
    ("Category: "+ listItem[i].querySelector("h2").textContent
)
console.log
("Elements:"+listItem[i].querySelectorAll("li").length

)
}