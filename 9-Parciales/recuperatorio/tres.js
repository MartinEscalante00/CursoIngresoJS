function Mostrar()
{
	var precio1;
	var precio2;
	var precio3;
	var compra;
	var promedio

	precio1=document.getElementById('precioUno').value;
	precio2=document.getElementById("precioDos").value;
	precio3=document.getElementById("precioTres").value;


	compra=parseInt(precio1)+parseInt(precio2)+parseInt(precio3);
	alert("la suma es"+compra);

	promedio=compra/3;
	alert("el promedio es "+promedio);

}
