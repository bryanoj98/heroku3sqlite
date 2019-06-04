
//var slider = document.getElementById("barra");
//var output = document.getElementById("demo");
//output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
//slider.oninput = function() {
//  output.innerHTML = this.value;
//}


function AccionSensores(){
	console.log ('Sensores');
	Se.removeAttribute("hidden");
    Ac.setAttribute("hidden","");

    espacioPuerta.setAttribute("hidden","");
	espacioLed.setAttribute("hidden","");
	espacioBombillo.setAttribute("hidden","");
	espacioVenti.setAttribute("hidden","");

	espacioTermometro.setAttribute("hidden","");
	espacioPresencia.setAttribute("hidden","");
	espacioPulsador.setAttribute("hidden","");
	espacioPotenciometro.setAttribute("hidden","");
}
function AccionActuadores(){
	console.log ('Actuadores');
	Ac.removeAttribute("hidden");
	Se.setAttribute("hidden","");

	espacioPuerta.setAttribute("hidden","");
	espacioLed.setAttribute("hidden","");
	espacioBombillo.setAttribute("hidden","");
	espacioVenti.setAttribute("hidden","");

	espacioTermometro.setAttribute("hidden","");
	espacioPresencia.setAttribute("hidden","");
	espacioPulsador.setAttribute("hidden","");
	espacioPotenciometro.setAttribute("hidden","");
}	



function temperatura(){
	console.log ('Temperatura')
	espacioTermometro.removeAttribute("hidden");
	espacioPresencia.setAttribute("hidden","");
	espacioPulsador.setAttribute("hidden","");
	espacioPotenciometro.setAttribute("hidden","");
}

function presencia(){
	console.log ('presencia')
	espacioPresencia.removeAttribute("hidden");
	espacioTermometro.setAttribute("hidden","");
	espacioPulsador.setAttribute("hidden","");
	espacioPotenciometro.setAttribute("hidden","");
}

function pulsador(){
	console.log ('pulsador')
	espacioPulsador.removeAttribute("hidden");
	espacioTermometro.setAttribute("hidden","");
	espacioPotenciometro.setAttribute("hidden","");
	espacioPresencia.setAttribute("hidden","");
}

function potenciometro(){
	console.log ('potenciometro')
	espacioPotenciometro.removeAttribute("hidden");
	espacioTermometro.setAttribute("hidden","");
	espacioPresencia.setAttribute("hidden","");
	espacioPulsador.setAttribute("hidden","");
}






function Ctemperatura(){
	console.log ('Ingrese temp')
	espacioBombillo.removeAttribute("hidden");
	espacioLed.setAttribute("hidden","");
	espacioPuerta.setAttribute("hidden","");
	espacioVenti.setAttribute("hidden","");
	
}


function led(){
	console.log ('led')
	espacioLed.removeAttribute ("hidden");
	espacioPuerta.setAttribute("hidden","");
	espacioVenti.setAttribute("hidden","");
	espacioBombillo.setAttribute("hidden","");

}

function puerta(){
	console.log ('puerta')
	espacioPuerta.removeAttribute("hidden");
	espacioVenti.setAttribute("hidden","");
	espacioLed.setAttribute("hidden","");
	espacioBombillo.setAttribute("hidden","");

}

function ventilador(){
	console.log ('ventilador')
	espacioVenti.removeAttribute("hidden");
	espacioPuerta.setAttribute("hidden","");
	espacioLed.setAttribute("hidden","");
	espacioBombillo.setAttribute("hidden","");
}