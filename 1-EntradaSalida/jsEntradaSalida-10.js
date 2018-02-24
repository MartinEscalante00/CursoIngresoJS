/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var numero1;
	var importe
	numero1=document.getElementById('importe').value;
	importe=parseInt(numero1);

	importe=((25/100)*(numero1));

	importe=(numero1-importe);

	document.getElementById("resultado").value= importe
}

