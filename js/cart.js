document.addEventListener('DOMContentLoaded', function() {
  const cart = document.getElementById('cart-list');
  const totalPriceElement1 = document.getElementById('total-price1');
  const totalPriceElement2 = document.getElementById('total-price2');
  const updateCartButton = document.getElementById('update-cart');
  const updateSuccessMessage = document.getElementById('update-success');

  function updateTotal() {
      let total = 0;
      const items = cart.getElementsByClassName('item1');
      for (let item of items) {
          const price = parseFloat(item.getElementsByClassName('price')[0].getAttribute('data-price'));
          const quantity = parseInt(item.getElementsByClassName('in1')[0].value);
          const itemTotal = price * quantity;
          item.getElementsByClassName('item-total')[0].innerText = `$${itemTotal.toFixed(2)}`;
          total += itemTotal;
      }
      totalPriceElement1.innerText = `$${total.toFixed(2)}`;
      totalPriceElement2.innerText = `$${total.toFixed(2)}`;
  }

  cart.addEventListener('click', function(event) {
      if (event.target.classList.contains('plus') || event.target.classList.contains('minus')) {
          const item = event.target.closest('.item1');
          const quantityInput = item.getElementsByClassName('in1')[0];
          let quantity = parseInt(quantityInput.value);

          if (event.target.classList.contains('plus')) {
              quantity += 1;
          } else if (event.target.classList.contains('minus') && quantity > 0) {
              quantity -= 1;
          }

          quantityInput.value = quantity;
          updateTotal();
      }
      if (event.target.classList.contains('delete')) {
        const item = event.target.closest('.item1');
        item.remove();
        updateTotal();
    }
  });

  cart.addEventListener('input', function(event) {
      if (event.target.classList.contains('in1')) {
          const quantity = parseInt(event.target.value);
          if (!isNaN(quantity) && quantity > 0) {
              updateTotal();
          }
      }
  });

  updateCartButton.addEventListener('click', function() {
      updateTotal();
      updateSuccessMessage.style.display = 'block';
      setTimeout(() => {
          updateSuccessMessage.style.display = 'none';
      }, 2000);
  });

  // Initialize total
  updateTotal();
   
});
