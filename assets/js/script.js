const btn_menu = document.querySelector('.btn_menu');
const header_right = document.querySelector('.header_right');
const btn_close_filter = document.querySelector('.btn_close_filter');
const open_filter = document.querySelector('.open_filter');
const over_filter = document.querySelector('.over_filter');

btn_menu.addEventListener('click', () => {

    header_right.classList.toggle('open_menu_mobile');

});

open_filter.addEventListener('click', () => {

    document.querySelector('.filters').classList.add('open_filters');
    document.querySelector('.over_filter').classList.add('open_over_filter');

});
btn_close_filter.addEventListener('click', () => {

    document.querySelector('.filters').classList.remove('open_filters');
    document.querySelector('.over_filter').classList.remove('open_over_filter');


});
over_filter.addEventListener('click', () => {

    document.querySelector('.filters').classList.remove('open_filters');
    document.querySelector('.over_filter').classList.remove('open_over_filter');


});