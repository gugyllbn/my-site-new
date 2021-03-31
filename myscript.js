let cartBody = document.getElementById('cart');
let inputCart = document.getElementById('cartFF');

window.addEventListener('click', (event) => {
  console.log('click');

  // клік на кнопку "Купити"
  if(event.target.classList.contains('button-buy')){
    console.log('клік на кнопку');
    addItems(event.target);
  }
//КЛІК НА КНОПКУ ВИДАЛЕННЯ ТОВАРУ
if(event.target.classList.contains('delete-items')){
  console.log('клік на кнопку видалення товару');
  deleteItems(event.target);
}
});

function addItems(element){
  console.log('додавання товару');
  let li = document.createElement('li');
  li.innerHTML = element.dataset.img
               + element.dataset.name
               + element.dataset.price
               + '<div class="delete-items"> X </div>';
  cartBody.appendChild(li);                   
}


function deleteItems(element){
console.log('видалення товару');
element.parentNode.remove();
}