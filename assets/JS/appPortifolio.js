const menuMobile = document.querySelector('.list-menu');
const btnMenu = document.querySelector('#btn-menu');
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

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

setInterval(carousel, 1800);
const menu = new Menu();
menu.inicio();

