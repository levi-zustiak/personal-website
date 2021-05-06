const body = document.getElementsByTagName("BODY")[0];

const projects = document.querySelector('.project-grid');
const cards = document.getElementsByClassName('project-card');
const cardArray = Array.from(cards).entries();
const modal = document.getElementsByClassName('modal-card');
const closeBtns =
document.getElementsByClassName('close-button');

for (let [index, card] of cardArray) {
  const openModal = () => {
      projects.classList.add('hide-projects');
      modal[index].classList.add('block', 'modal-transition');
  }
  const closeModal = () => {
      modal[index].classList.remove('block', 'modal-transition');
      projects.classList.remove('hide-projects');
  }
  card.addEventListener("click", openModal);
  closeBtns[index].addEventListener("click", closeModal);
};

const menuBtn = document.getElementById('menu-button');
const menuBtnDivs = menuBtn.querySelectorAll('.menuBar');
const menu = document.querySelector('.menu');
let opened = false;

const menuToggle = () => {
  if(!opened) {
    menu.classList.add('menuToggle');
    menuBtnDivs.forEach(element => {
      element.classList.add('menuOpen');
      element.classList.remove('menuClose');
    });
    body.classList.toggle('scrollLock');
    opened = true;
  } else {
    menu.classList.remove('menuToggle');
    menuBtnDivs.forEach(element => {
      element.classList.remove('menuOpen');
      element.classList.add('menuClose');
    });
    body.classList.toggle('scrollLock');
    opened = false;
  }
};

menuBtn.addEventListener("click", menuToggle);
