var menu_button = document.getElementById('bg-bars');
    menu_button.addEventListener('click', toggleMenu);

function func(){
    var showFunction = setTimeout(showMenu, 8000);
}

var mobile_menu = document.getElementById('links-mob');
var sectionProfile = document.getElementById("bg");
var bars = document.getElementById("bars");

function toggleMenu() {
  if (mobile_menu.classList.contains('menu-hidden'))
  {
    func()
    // animationMargin("bg", 0, 43, 3, true);
    // animationHeight("links-mob", 0, 30, 5, true);
    mobile_menu.classList.remove('menu-hidden');
    mobile_menu.classList.add('menu-visible');
    menu_button.style.backgroundColor = "#182153";
    bars.style.color = "white";
  }
  else
  {
    // animationMargin("bg", 43, 13, 3, false);
    // animationHeight("links-mob", 30, 0, 5, false);
    mobile_menu.classList.remove('menu-visible');
    mobile_menu.classList.add('menu-hidden');
    menu_button.style.backgroundColor = "white";
    bars.style.color = "#182153";
  }
}

function showMenu(){
  mobile_menu.classList.add('transitionAux')
}

// function animationMargin(id, posI, posF, ms, x){
//   var elem = document.getElementById(id);
//   var pos = posI;
//   var id = setInterval(frame, ms);
//   function frame() {
//     if (pos == posF) {
//       clearInterval(id);
//     } else {
//         if (x == true) {
//           pos++;
//         }else {
//           pos--;
//         }
//         elem.style.marginTop = pos + 'vh';
//     }
//   }
// }
//
// function animationHeight(id, posI, posF, ms, x){
//   var elem = document.getElementById(id);
//   var pos = posI;
//   var id = setInterval(frame, ms);
//   function frame() {
//     if (pos == posF) {
//       clearInterval(id);
//     } else {
//       if (x == true) {
//         pos++;
//       }else {
//         pos--;
//       }
//       elem.style.height = pos + 'vh';
//     }
//   }
// }
