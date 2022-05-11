const menuMobile = document.querySelector('.list-menu');
const btnMenu = document.querySelector('#btn-menu');
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
const menuBar = document.getElementById("menu-bar");
const btnNoturno = document.querySelector('.modo-tela');
const portifolio = document.querySelector('.portifolio-rasa');


function Menu() {
    this.inicio = () => {
        btnMenu.addEventListener('click', e => {
            menuMobile.classList.toggle('active');
            btnMenu.classList.toggle('active');
        })
    }
}
let idx = 0;

function carousel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 100}%)`;

}

function Noturno(){

    this.clickBtn = () => {btnNoturno.addEventListener('click', e =>{
        menuBar.classList.toggle('noturno');
        portifolio.classList.toggle('noturno');
        btnNoturno.classList.toggle('noturno');
        btnMenu.classList.toggle('noturno');

    })

    }

    this.modoNoturno = () => {
        this.clickBtn();
    }
}

setInterval(carousel, 1800);
const noturno = new Noturno();
const menu = new Menu();
menu.inicio();
noturno.modoNoturno();
