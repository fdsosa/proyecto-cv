function displayLinks(){

  var links = document.getElementById("links-mob");

  if (links.style.display != "flex")
  {
    links.style.display = "flex";
    links.style.height = "30vh";
    document.getElementById("bg").style.margin = "43vh 0 0 0";
    document.getElementById("bar").style.background = "#405284";
  }
  else
  {
    links.style.display = "none";
    links.style.height = "0vh";
    document.getElementById("bg").style.margin = "13vh 0 0 0";
    document.getElementById("bar").style.background = "white";
  }

}
