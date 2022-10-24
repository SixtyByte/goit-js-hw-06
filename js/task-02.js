const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement=document.querySelector(`#ingredients`);


for(let i=0; i<ingredients.length; i+=1){
  const listItem=document.createElement(`li`)
ulElement.append(listItem);
listItem.classList.add(`item`);
listItem.textContent=ingredients[i];  }



