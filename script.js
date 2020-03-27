
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
