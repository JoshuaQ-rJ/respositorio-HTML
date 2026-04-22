const btn_menu = document.querySelector('#btn_menu_ic')
const menu = document.querySelector('.menu_header')

btn_menu.addEventListener('click', ()=>{
    menu.classList.toggle('active') 
})