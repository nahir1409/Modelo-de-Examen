//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var lado;
    var perimetro;

	lado = parseFloat(document.getElementById("lado").value);

    perimetro= lado *3;

    
 alert("El perímetro del triangulo es de: " + perimetro);
	
}

