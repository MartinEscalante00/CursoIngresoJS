/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	suma= parseInt(numeroUno) + parseInt(numeroDos);

	alert("la suma es"+suma);

}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	resta= parseInt(numeroUno) - parseInt(numeroDos);

	alert("la suma es"+resta);
}		
	

function multiplicar()
{ 
 var numeroUno;
	var numeroDos;
	var multiplicacion;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	multiplicacion= parseInt(numeroUno) * parseInt(numeroDos);

	alert("la suma es"+multiplicacion);	
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var division;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	division= parseInt(numeroUno) / parseInt(numeroDos);

	alert("la suma es"+division);
}


