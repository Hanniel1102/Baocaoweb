document.addEventListener('DOMContentLoaded', function() {
    const cartItem = document.querySelector('.item1');
    const decreaseButton = cartItem.querySelector('.minus');
    const increaseButton = cartItem.querySelector('.plus');
    const quantityInput = cartItem.querySelector('.in1');
    const itemPriceElement = cartItem.querySelector('.price');
    const totalPriceElement = cartItem.querySelector('.i3');
  
    const itemPrice = parseFloat(itemPriceElement.getAttribute('data-price'));
  
    function updateTotalPrice() {
      const quantity = parseInt(quantityInput.value);
      const totalPrice = itemPrice * quantity;
      totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }
  
    decreaseButton.addEventListener('click', function() {
      let quantity = parseInt(quantityInput.value);
      if (quantity > 0) {
        quantity--;
        quantityInput.value = quantity;
        updateTotalPrice();
      }
    });
  
    increaseButton.addEventListener('click', function() {
      let quantity = parseInt(quantityInput.value);
      quantity++;
      quantityInput.value = quantity;
      updateTotalPrice();
    });
  
    quantityInput.addEventListener('change', function() {
      if (quantityInput.value < 1) {
        quantityInput.value = 1;
      }
      updateTotalPrice();
    });

    updateTotalPrice();
  });
