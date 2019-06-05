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
