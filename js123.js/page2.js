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

document.getElementById("button").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href="page3.html";
})