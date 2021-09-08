const openMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.hamburger-menu-clicked > a');

function show() {
  document.querySelector('.hamburger-menu-clicked').classList.remove('close');
  document.querySelector('.hamburger-menu-clicked').classList.add('show');
  document.querySelector('*').style.overflow = 'hidden';
}

function close() {
  document.querySelector('.hamburger-menu-clicked').classList.remove('show');
  document.querySelector('.hamburger-menu-clicked').classList.add('close');
  document.querySelector('*').style.overflow = 'auto';
}
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
document.querySelector('.menu-list > ul').addEventListener('click', close);