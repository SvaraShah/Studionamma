let overlay = document.querySelector(".overlay")
let menu = document.querySelector(".menu-p")
let videoplay = document.querySelector('video');
let video = document.querySelector('.videocontainer');
let page = document.querySelector('.page')
let secondvid = document.querySelector('.secondvid')
let cursor = document.querySelector('.cursor')
let flag = 1

menu.addEventListener("click", ()=>{

    if(flag){
    overlay.style.top = "0%"
    overlay.style.transform = "rotate(10deg)"
    menu.textContent = "Close"
    flag = 0
    }
    else{
    overlay.style.top = "-120%"
    overlay.style.transform = "rotate(0deg)"
    menu.textContent = "Menu"
    flag = 1
    }

})
page.addEventListener('mousemove',(e)=>{
    video.style.top= e.clientY + 50 + "px";
    video.style.left= e.clientX + 50 + "px";
    video.style.transition = "linear 0.3s";
});