//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var maximo;
    var minimo;
    var diaMax;
    var diaMin;
    var flag = 0;

   for (vari=1; i <=7 ; i++)
   {
       while ( importe <=0 || isNan (importe))
       {
           importe = parseInt(prompt("Error, Ingrese el importe"));
       }
       if ( importe > maximo || flag ==0)
       {
           maximo = importe;
           diaMax = i;
       } 
       if (importe <minimo || flag ==o)
       {
           minimo = importe;
           flag = i;
       }
   }

	alert("Mayor importe $" + maximo + "el día " + diaMax + "\nMenor importe $" + minimo + "el día " );

	
}

