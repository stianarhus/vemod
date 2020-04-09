
var referanse = document.getElementById("overskriften");
var referanse1 = document.getElementById("overskrift");
var besvarelse= document.getElementById("svar");



function endreTekster() {
  if (referanse.innerHTML == "Ny overskrift")
  {
    referanse.innerHTML = "Nyere overskrift";
    referanse1.innerHTML = "Nyere underoverskrift";
    besvarelse.innerHTML = "Nyere tekst";

  }
  else {
    referanse.innerHTML = "Ny overskrift";
    referanse1.innerHTML = "Ny underoverskrift";
    besvarelse.innerHTML = "Ny tekst";
  }
}

 /* function nyKnapp() {
  window.open("Lab4.html");
} */
function viseSvar (){
  var x = document.getElementById("svar");
    if (x.style.display === "none") {
    x.style.display = "block";
  } else { x.style.display = "none";
  }
}

function hide() {
  document.getElementById("endreTekster").hidden = true;
}
function show() {
  document.getElementById("svar").hidden = false;
}
/* function nyKnapp() {
  myWindow = window.open("Lab4.html");
} */

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}