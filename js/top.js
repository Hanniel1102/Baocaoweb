let mybutt=document.getElementById("buttop");
window.onscroll = function(){
    scrollFunc();
}
function scrollFunc(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop >50){
        mybutt.style.display="block";
    }
    else{
        mybutt.style.display="none";
    }
}
function topFunc(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}