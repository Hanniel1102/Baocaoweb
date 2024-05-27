function toggleText(event) {
    event.preventDefault();
    var moreText = event.target.parentNode.previousElementSibling.querySelector('.more-text');
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        event.target.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        event.target.textContent = "Read More";
    }
}

document.querySelectorAll('.read_more a').forEach(item => {
    item.addEventListener('click', toggleText);
});


document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const products = document.querySelectorAll(".products .item");

    function filterProducts() {
        const query = searchInput.value.toLowerCase();
        
        products.forEach(product => {
            const productName = product.querySelector(".name").textContent.toLowerCase();
            if (productName.includes(query)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    searchBtn.addEventListener("click", function(event) {
        event.preventDefault();
        filterProducts();
    });

    searchInput.addEventListener("keyup", function() {
        filterProducts();
    });
});
