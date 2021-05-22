const project1 = {
  heading: 'Senior Project',
  subheading: 'web application',
  problem: 'Create an asp.net core application that uses the Jira REST api to get and post issues to a jira board. Client wanted an application to allow their clients to view issues for their projects.',
  solution: 'Our team created an application in asp.net core mvc using C# that leverages the Jira API to allow users to view, create, and edit tasks pertaining to their project boards.',
  link: '#',
}
const project2 = {
  heading: 'Personal Website',
  subheading: 'website',
  problem: 'I needed a website to display information about myself as well as projects worked on and a place to contact me.',
  solution: 'I designed my site in figma, then developed using Pug, css, and JS to create my website. I felt that actually coding is more benefical since I have full customizability and helps me learn a lot more.',
  link: '#',
}
const project3 = {
  heading: 'React Applications',
  subheading: 'mobile application',
  problem: 'In one of my classes, we built several mobile apps using react native. The material was helpful but not as current as it good be.',
  solution: 'To build my knowledge in React, I decided to change some of the projects as well as add the more up to date items such as hooks.',
  link: '#',
}
const project4 = {
  heading: 'Senior Project 4',
  subheading: 'web application',
  problem: 'Create an asp.net core application that uses the Jira REST api to get and post issues to a jira board. Client wanted an application to allow their clients to view issues for their projects.',
  solution: 'Create an asp.net core application that uses the Jira REST api to get and post issues to a jira board. Client wanted an application to allow their clients to view issues for their projects.',
  link: '#',
}
const project5 = {
  heading: 'Senior Project 5',
  subheading: 'web application',
  problem: 'Create an asp.net core application that uses the Jira REST api to get and post issues to a jira board. Client wanted an application to allow their clients to view issues for their projects.',
  solution: 'Create an asp.net core application that uses the Jira REST api to get and post issues to a jira board. Client wanted an application to allow their clients to view issues for their projects.',
  link: '#',
}
const project6 = {
  heading: 'Senior Project 6',
  subheading: 'web application',
  problem: 'Create an asp.net core application that uses the Jira REST api to get and post issues to a jira board. Client wanted an application to allow their clients to view issues for their projects.',
  solution: 'Create an asp.net core application that uses the Jira REST api to get and post issues to a jira board. Client wanted an application to allow their clients to view issues for their projects.',
  link: '#',
}


const body = document.getElementsByTagName("BODY")[0];

const projects = [
  project1,
  project2,
  project3,
  // project4,
  // project5,
  // project6
];
const heading = document.querySelector('.modal-heading');
const subheading = document.querySelector('.subheading');
const problem = document.querySelector('.problem');
const solution = document.querySelector('.solution');
const link = document.querySelector('.modal-link');

const addContent = (index) => {
  heading.innerHTML = projects[index].heading;
  subheading.innerHTML = projects[index].subheading;
  problem.innerHTML = projects[index].problem;
  solution.innerHTML = projects[index].solution;
  link.href = projects[index].link;
}


const projectGrid = document.querySelector('.project-grid');
const cards = document.getElementsByClassName('project-card');
const cardArray = Array.from(cards).entries();
const modal = document.querySelector('.modal-card');
const closeBtn =
document.querySelector('.close-button');
const projectContainer = document.getElementById('projects');

for (let [index, card] of cardArray) {
  const openModal = () => {
    addContent(index);
    projectGrid.classList.add('hide-projects');
    setTimeout(() => {
      modal.classList.add('modal-transition');
    }, 200);
    let scroll = projectContainer.offsetTop;
    window.scrollTo(0, scroll);
  }
  const closeModal = () => {
    modal.classList.remove('modal-transition');
    setTimeout(() => {
      projectGrid.classList.remove('hide-projects');
    }, 200);
  }
  card.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
};



const menuBtn = document.getElementById('menu-button');
const menuBtnDivs = menuBtn.querySelectorAll('.menuBar');
const menu = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.nav-link');
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
navLinks.forEach(element => {
  element.addEventListener("click", menuToggle);
});
