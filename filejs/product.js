// tăng giảm số lượng
document.addEventListener("DOMContentLoaded", function() {
    const decrementButton = document.getElementById("decrement");
    const incrementButton = document.getElementById("increment");
    const quantityDisplay = document.getElementById("quantity");
    
    decrementButton.addEventListener("click", function() {
        let currentQuantity = parseInt(quantityDisplay.innerText);
        if (currentQuantity > 0) { // Prevent negative quantity
            quantityDisplay.innerText = currentQuantity - 1;
        }
    });
    
    incrementButton.addEventListener("click", function() {
        let currentQuantity = parseInt(quantityDisplay.innerText);
        quantityDisplay.innerText = currentQuantity + 1;
    });
});

// readmore
document.addEventListener('DOMContentLoaded', function() {
    var readMoreBtns = document.querySelectorAll('.readMoreBtn');
    readMoreBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var moreContent = this.parentElement.previousElementSibling.querySelector('.more-content');
            var dots = this.parentElement.previousElementSibling.querySelector('.dots');

            if (moreContent.style.display === 'none') {
                moreContent.style.display = 'inline';
                dots.style.display = 'none';
                this.textContent = 'Read less';
            } else {
                moreContent.style.display = 'none';
                dots.style.display = 'inline';
                this.textContent = 'Read more';
            }
        });
    });
});

document.getElementById("cartLink").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href="../html/cart.html"
})