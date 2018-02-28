//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	var metro;
	var perimetro;
	ancho=document.getElementById("ancho").value;
	largo=document.getElementById('largo').value;

	largo=parseInt(largo)
	ancho=parseInt(ancho)
	perimetro=(largo*2)+(ancho*2)
	metro=perimetro*6

		alert("se necesitan"+metro+"metros");

	
}

