const openMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.hamburger-menu-clicked > a');

function show() {
document.querySelector('.hamburger-menu-clicked').classList.remove('close');
  document.querySelector('.hamburger-menu-clicked').classList.add('show');
}

function close() {
  document.querySelector('.hamburger-menu-clicked').classList.remove('show');
  document.querySelector('.hamburger-menu-clicked').classList.add('close');
}
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
