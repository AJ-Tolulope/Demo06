


const menu = document.querySelector('.menu-btn')
const close = document.querySelector('.close')
const nav = document.querySelector('nav ul')

menu.addEventListener('click', () =>{
    nav.classList.add('open')
})

close.addEventListener('click', () =>{
    nav.classList.remove('open')
})

window.addEventListener('scroll', () =>{
    nav.classList.remove('open')
})
  