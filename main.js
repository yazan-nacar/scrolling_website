let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountins3 = document.getElementById("mountins3");
let mountins4 = document.getElementById("mountins4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let wellcome = document.querySelector(".wellcome");

window.onscroll = function () {
    let value = scrollY;
    stars.style.left = `${value}px`;
    moon.style.top = `${value * 4 }px`;
    mountins3.style.top = `${value * 2 }px`;
    mountins4.style.top = `${value * 1.5}px`;
    river.style.top = `${value}px`;
    boat.style.top = `${value}px`;
    boat.style.left = `${value * 3}px`;
    wellcome.style.fontSize = `${value}px`;
    if(scrollY >= 67) {
        wellcome.style.fontSize = `67px`;
        wellcome.style.position = `fixed`;

        if(scrollY >= 460) {
            wellcome.style.display = "none";
            
        }else {
             wellcome.style.display = "block";
        }
        if(scrollY >= 127) {
            document.querySelector(".main").style.background = "linear-gradient(#376281 , #10001f)"
        }else {
            document.querySelector(".main").style.background = "linear-gradient(rgb(97, 0, 109) , rgb(12, 0, 48))"
        }
    }

    
}
