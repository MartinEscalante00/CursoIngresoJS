function Mostrar()

{
	/*
	var largo;
	var ancho;
	var perimetro;
	

	largo=document.getElementById('alrgo').value;
	ancho=document.getElementById('ancho').value;

	perimetro=2*(largo)+2*(ancho)

	alert("el perimetro es " +perimetro);

*/
	var precioBruto;
	var descuento;
	var precioFinal;
	var iva=1.21;
	var precioIva;

	precioBruto=document.getElementById("alrgo").value;
	descuento=document.getElementById("ancho").value;

	precioBruto=parseInt(precioBruto)
	descuento=parseInt(descuento);

	descuento=(precioBruto*descuento)/100

	precioFinal=precioBruto-descuento;

	precioIva=precioFinal*iva;
	
	
	alert("el precio final es " + precioFinal);

	alert("el descuento es"+precioIva);









}

