let para3 = document.querySelector('.para3');
let c2 = document.querySelector('.container2');
let c1 = document.querySelector('.container1');
let navigation = document.querySelector('.navigation');
let para2 = document.querySelector('.para2');
let para1 = document.querySelector('.para1');
let para4 = document.querySelector('.para4');
let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
let flag = 0;
para3.addEventListener('click', () => {
    if(flag == 0){
        c2.style.top = "10%";
        c2.style.transform = "rotate(0deg)";
        c2.style.display = "block";


        flag = 1;

    }
    else{
        c2.style.top = "-130%";
        c2.style.transform = "rotate(7deg)";
        c2.style.display = "block";
        c2.style.transition = "cubic-bezier(.14,.82,1,.66)0.4s";
        flag = 0;
    }
});
para2.addEventListener('click', () => {
    if(flag == 1){
        navigation.style.backgroundColor = "#111111";
        c1.style.backgroundColor = "#111111";
        c2.style.backgroundColor = "#111111";
        para3.style.color = "#E4E4E4";
        para2.style.color = "#E4E4E4";
        para1.style.color = "#E4E4E4";
        para4.style.color = "#E4E4E4";
        text1.style.color = "#e4e4e4";
        text2.style.color = "#e4e4e4";
        navigation.style.transition = "0.5s";
        c1.style.transition = "0.5s";
        c2.style.transition = "0.5s";
        navigation.style.borderBottom = "1px solid #E4E4E4";
        flag = 0;
    }
    else{
        navigation.style.backgroundColor = "#E4E4E4";
        c1.style.backgroundColor = "#E4E4E4";
        c2.style.backgroundColor = "#E4E4E4";
        para3.style.color = "#111111";
        para2.style.color = "#111111";
        para1.style.color = "#111111";
        para4.style.color = "#111111";
        text1.style.color = "#111111";
        text2.style.color = "#111111";
        navigation.style.transition = "0.5s";
        c1.style.transition = "0.5s";
        c2.style.transition = "0.5s";
        navigation.style.borderBottom = "1px solid #111111";
        flag = 1;
    }
});
video.addEventListener('mousemove', () => {
    video.style.transform = "scale(1.1)";
    video.style.transition = "0.5s";
});
video.addEventListener('mouseout', () => {
    video.style.transform = "scale(1)";
    video.style.transition = "0.5s";
});


