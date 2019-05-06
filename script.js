var menu_button = document.getElementById('bg-bars');
    menu_button.addEventListener('click', toggleMenu);

var mobile_menu = document.getElementById('links-mob');
var sectionProfile = document.getElementById("bg");
var bars = document.getElementById("bars");

function toggleMenu() {
  if (mobile_menu.classList.contains('menu-hidden')) {
    mobile_menu.classList.remove('menu-hidden');
    mobile_menu.classList.add('menu-visible');
    menu_button.style.backgroundColor = "#182153";
    sectionProfile.style.margin = "43vh 0 0 0";
    bars.style.color = "white";
  } else {
    mobile_menu.classList.remove('menu-visible');
    mobile_menu.classList.add('menu-hidden');
    menu_button.style.backgroundColor = "white";
    sectionProfile.style.margin = "13vh 0 0 0";
    bars.style.color = "#182153";
  }
}
