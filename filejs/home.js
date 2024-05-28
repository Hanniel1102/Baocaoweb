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
document.getElementById("toShop").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href="../html123.html/page3.html"
})