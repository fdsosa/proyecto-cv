var menu_button = document.getElementById('bg-bars');
    menu_button.addEventListener('click', toggleMenu);

var mobile_menu = document.getElementById('links-mob');
    mobile_menu.addEventListener('transitionstart', showMenu);
    mobile_menu.addEventListener('transitionend', hideMenu);

var sectionProfile = document.getElementById("bg");
var bars = document.getElementById("bars");

function toggleMenu() {
  if (mobile_menu.classList.contains('d-none')) {
    mobile_menu.classList.remove('d-none');
  }

  if (mobile_menu.classList.contains('menu-hidden'))
  {
    mobile_menu.classList.remove('menu-hidden');
    mobile_menu.classList.add('menu-visible');
    menu_button.classList.remove('bar-inactive');
    menu_button.classList.add('bar-active');
    bars.style.color = "white";
  }
  else
  {
    mobile_menu.classList.remove('menu-visible');
    mobile_menu.classList.add('menu-hidden');
    menu_button.classList.remove('bar-active');
    menu_button.classList.add('bar-inactive');
    bars.style.color = "#182153";
  }
}

function showMenu(){
  if (mobile_menu.classList.contains('menu-visible')) {
    mobile_menu.classList.remove('d-none')
  }
}

function hideMenu(){
  if (mobile_menu.classList.contains('menu-hidden')) {
    mobile_menu.classList.add('d-none')
  }
}


//DISPLAY BARS
function isVisible(elem) {

  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

function showVisible() {
  for (let progBar of document.getElementsByClassName('background')) {

    console.log('progbar');

    if (isVisible(progBar)) {
      
      if(progBar.classList.contains('git')){
        progBar.classList.add('progBar-animate-git');
      }

      if(progBar.classList.contains('html')){
        progBar.classList.add('progBar-animate-html');
      }

      if(progBar.classList.contains('css')){
        progBar.classList.add('progBar-animate-css');
      }

      if(progBar.classList.contains('js')){
        progBar.classList.add('progBar-animate-js');
      }

      if(progBar.classList.contains('php')){
        progBar.classList.add('progBar-animate-php');
      }

      if(progBar.classList.contains('mysql')){
        progBar.classList.add('progBar-animate-mysql');
      }

      if(progBar.classList.contains('english')){
        progBar.classList.add('progBar-animate-english');
      }
    }
  }

  let socialBar = document.getElementById('social');

  if (isVisible(socialBar)) {
    socialBar.classList.add('social-bar-animation');
  }  
}

window.addEventListener('scroll', showVisible);
showVisible();

//ANIMATION PROFILE
let boxPic = document.getElementById('pic');
let boxInfo = document.getElementById('info');

function animationProfile(){
  boxInfo.classList.add('profile-animation');
  boxPic.classList.add('profile-animation');
}

window.addEventListener('load', animationProfile);