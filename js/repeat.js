// Burger menu // 
const burgerBtn = document.querySelector('.md_menu_mobile');
const navBar = document.querySelector('.md_menu');
const navBarList = document.querySelector('.md_menu_ul');
let menuImg = document.querySelector('.md_mm_img')
burgerBtn.addEventListener('click',()=> {
  if(navBar.classList.toggle('burger')) {
    menuImg.src = '../photo/open.png'
  }else{
    menuImg.src = '../photo/close.png'
  }
  navBarList.classList.toggle('burger-list');
})

let sing=document.querySelector('.md_menu2_button');
sing.innerText=JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).firstName : 'Войти'