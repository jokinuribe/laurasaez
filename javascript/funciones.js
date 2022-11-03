
var j = jQuery.noConflict();
j(document).ready(function(){
    fecha_actual=dame_fecha_actual()
    j("#divFecha1").html(fecha_actual);
    j("#divFecha2").html(fecha_actual);
    j("#divFecha3").html(fecha_actual);
    clientSideInclude('menu', './menu.html');	
	ofuscado="e-mail: lau"+"ras"+"aez@la"+"uras"+"aez.com<br>";		
	document.getElementById("divEmail").innerHTML=ofuscado;
	
});

function menu(num){

if (num==0){
    cUrl="index.html"
}

if (num==1){
    cUrl="servicios1.html"
}

if (num==2){
    cUrl="servicios2.html"
}

if (num==3){
    cUrl="servicios3.html"
 }

if (num==4){
    cUrl="servicios4.html"
}

if (num==5){
    cUrl="servicios5.html"
}

if (num==6){
    cUrl="contacto.html"
}
  location=cUrl
}

function calendario_contribuyente(){
	var anio=1900+new Date().getYear();	
	cUrl="https://sede.agenciatributaria.gob.es/Sede/ayuda/calendario-contribuyente/calendario-contribuyente/calendario-anual.html";
	abre_ventana(cUrl, "CALENDARIO_CONTRIBUYENTE");
}

function aviso_legal(){
    cUrl="./docs/LOPD Aviso_legal.pdf";
    abre_ventana(cUrl, "AVISO_LEGAL");
}

function abre_ventana(cUrl, opciones){
    window.open(cUrl, opciones);
}

function clientSideInclude(id, url) {
    var req = false;
    // For Safari, Firefox, and other non-MS browsers
    if (window.XMLHttpRequest) {
    try {
    req = new XMLHttpRequest();
    } catch (e) {
    req = false;
    }
} else if (window.ActiveXObject) {
    // For Internet Explorer on Windows
    try {
    req = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
    try {
    req = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
    req = false;
    }
}
}

var element = document.getElementById(id);
if (!element) {
    alert("Bad id " + id +
        "passed to clientSideInclude." +
        "You need a div or span element " +
        "with this id in your page.");
    return;
    }
if (req) {
    // Synchronous request, wait till we have it all
    req.open('GET', url, false);
    req.send(null);
    element.innerHTML = req.responseText;
    } else {
    element.innerHTML =
        "Sorry, your browser does not support " +
            "XMLHTTPRequest objects. This page requires " +
            "Internet Explorer 5 or better for Windows, " +
            "or Firefox for any system, or Safari. Other " +
            "compatible browsers may also exist.";
    }
}
