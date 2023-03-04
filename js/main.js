const circles = document.querySelectorAll(".circles");
const icons = document.querySelectorAll(".icon");
const socialIcons = document.querySelectorAll(".social-icon");
const active = document.querySelectorAll(".active");
const nameUser = document.getElementById("name");
const nameLogin = document.getElementById("name-user");
const btn = document.getElementById("btn");
const error = document.querySelector(".error");


btn.addEventListener("click", e=> {
    e.preventDefault()
    if(nameLogin.value.length>=3) {
        nameUser.innerHTML = nameLogin.value;
        login.classList.add("hidden");
        game.classList.remove("hidden");
        header.classList.remove("hidden");
        timerd();
        error.classList.add("hidden");
    } else {
        error.classList.remove("hidden");
    }
})

let cont = 0;
var listaVacia = [];
if(listaVacia.length>20) {
    clearInterval(timer);
}

    circles.forEach((circle) => circle.addEventListener("click", () => {
        cont++;
        listaVacia.push(circle);
        if(cont<3){
            circle.parentNode.classList.add("active");
        }
        if(cont==2) {
            timer();
        }
        console.log("el cont es:",cont);
    }))

listaDescartados=[];

function timer() {
    var timer = setInterval(() => {
            if(listaVacia[0].parentNode.querySelector(".social-icon").src==listaVacia[1].parentNode.querySelector(".social-icon").src) {
                listaDescartados.push(listaVacia[0]);
                listaDescartados.push(listaVacia[1]);
            } else {
                console.log("no son iguales");
            }
        console.log(listaDescartados);
            circles.forEach((circle) => {
                if(!listaDescartados.includes(circle)) {
                    circle.parentNode.classList.remove("active");
                }
            })
    }, 1000);
    setTimeout(() => {
        clearInterval(timer);
        cont = 0;
        listaVacia=[];
    }, 1000);
}

var noseeeE= 0; 


function timerd() {
    var timer = setInterval(() => {
        const seconds = document.getElementById("seconds");
        seconds.innerHTML = noseeeE+1;
        noseeeE++;
        if(listaDescartados.length==20) {
            clearInterval(timer);
        }
    }, 1000);
}

const game = document.querySelector(".game")
const login = document.querySelector(".login");
const header = document.querySelector(".header");



// function sonIguales() {
//     circles.forEach((circle) => {
//         if(circle.parentNode.classList.contains("active")) {
//             agg = circle.parentNode.querySelector(".social-icon");
//             agg.classList.add("comparar");
//         }
//     })
// }

/*
socialIcons.forEach((socialIcon) => socialIcon.addEventListener("click", () => {

    if(socialIcon.parentNode.classList.contains("active")) {
        socialIcon.parentNode.classList.remove("active");
    } else {
        socialIcon.parentNode.classList.add("active");
    }
}))*/


const images = ["./img/facebook-icon.png", //1
            "./img/instagram-icon.png",    //2
            "./img/linkedin-icon.png",     //3
            "./img/pinterest-icon.png",    //4
            "./img/snapchat-icon.png",     //5
            "./img/spotify-icon.png",      //6
            "./img/twitter-icon.png",      //7
            "./img/whatsapp-icon.png",     //8
            "./img/youtube-icon.png",      //9
            "./img/tiktok-icon.png",       //10
            "./img/facebook-icon.png",    //11
            "./img/instagram-icon.png",   //12
            "./img/linkedin-icon.png",    //13
            "./img/pinterest-icon.png",   //14
            "./img/snapchat-icon.png",    //15
            "./img/spotify-icon.png",     //16
            "./img/twitter-icon.png",     //17
            "./img/whatsapp-icon.png",    //18
            "./img/youtube-icon.png",     //19
            "./img/tiktok-icon.png",      //20
        ];  


listRedSocial = [];

while (listRedSocial.length<20) {
    let min = 1;
    let max = 20;

    let randomNumber = Math.floor(Math.random()*(max-min+1)+min);

    if(!listRedSocial.includes(randomNumber)) {
        listRedSocial.push(randomNumber);
    }
}

const agregados = document.querySelectorAll(".agregado");
let contadoresss = 0;

socialIcons.forEach((socialIcon) => {
    if(!socialIcon.classList.contains("agregado")) {
        socialIcon.classList.add("agregado");
            contadoresss++;
            // socialIcon.innerHTML = listRedSocial[contadoresss-1];
            numero = listRedSocial[contadoresss-1];
            console.log(numero)
            socialIcon.src = images[numero-1];
    }
})

// socialIcons.forEach((socialIcon) => socialIcon.addEventListener("click", ()=> {
//     console.log(socialIcon);
// }))

console.log(listRedSocial);


