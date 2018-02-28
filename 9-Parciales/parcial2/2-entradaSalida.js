//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var descuento;
	var importeFinal;

	importe=prompt("Ingrese importe");
	importe=parseInt(importe)
	descuento=importe*0.21
	importeFinal=importe+descuento
	document.getElementById('importe').value=importeFinal;


	
}

