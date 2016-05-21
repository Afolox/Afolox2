// JavaScript Document

var saludoDIV = document.getElementById("saludo");

console.log(saludoDIV);

var GeneroP = window.prompt("Es usted hombre o mujer");

console.log(GeneroP);

var saludoHombre = "Tons que Mop?";
var saludoMujeres = "Diay que maldita Zorra?";

	if(GeneroP =="hombre"){
	saludoDIV.innerHTML = saludoHombre;  
	}
	else if(GeneroP =="mujer"){
	saludoDIV.innerHTML = saludoMujeres;
	}
	else{(GeneroP =="*")
	saludoDIV.innerHTML = "ERROR";
	}
	