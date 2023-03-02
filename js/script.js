var addToCartBtn = document.getElementById('action-btn');
var addToCartBtnMssg = document.getElementById('action-btn-msg');

addToCartBtn.addEventListener('mousedown', () => {
   addToCartBtn.classList.remove('hover:scale-105')
   addToCartBtn.classList.add('scale-95');
})

addToCartBtn.addEventListener('mouseup', () => {
   addToCartBtn.classList.remove('scale-95');
   addToCartBtn.disabled = true;

   setTimeout(() => {
      //CHANGE BUTTON STATE 
      addToCartBtnMssg.innerHTML = 'Added to Cart';

      //RESET BUTTON STATE AFTER A SECOND
      setTimeout(() => {
         addToCartBtnMssg.innerHTML = 
         `
            <img src="./img/icon-cart.svg" alt="cart_img">
            <span> Add to Cart </span>
         `
         addToCartBtn.disabled = false;
         addToCartBtn.classList.add('hover:scale-105')
      }, 1000);

   }, 400);
})

