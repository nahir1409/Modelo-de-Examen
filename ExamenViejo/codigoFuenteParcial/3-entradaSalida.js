//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var largo;
    var ancho;
    var perimetro;
    var alambre;

    
    largo = parseInt(document.getElementById("largo").value);
    ancho = parseInt(document.getElementById("ancho").value);

    perimetro = (largo + ancho) * 2;

    alambre = perimetro * 6;


    alert("Se necesitan comprar: " + alambre + " metros de alambre");
	
}

