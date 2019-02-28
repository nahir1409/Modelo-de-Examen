//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{   
	
    var impote;
    var iva;
    var importeFinal;

    importe = parseInt(prompt("Ingrese el importe"));

    iva = importe * 21/100;
    importeFinal= importe + iva;

    document.getElementById("importe").value=importeFinal;
    

}

