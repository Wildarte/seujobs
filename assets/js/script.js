const btn_menu = document.querySelector('.btn_menu');
const header_right = document.querySelector('.header_right');

btn_menu.addEventListener('click', () => {

    header_right.classList.toggle('open_menu_mobile');

});