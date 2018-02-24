/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	suma= parseInt(numeroUno)+ parseInt(numeroDos);

	alert("la suma es"+suma);


	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	resta= parseInt(numeroUno) - parseInt(numeroDos);

	alert("la suma es"+resta);


	var numeroUno;
	var numeroDos;
	var multiplicacion;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	multiplicacion= parseInt(numeroUno) * parseInt(numeroDos);

	alert("la suma es"+multiplicacion);

	var numeroUno;
	var numeroDos;
	var division;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	division= parseInt(numeroUno) / parseInt(numeroDos);

	alert("la suma es"+division);
}


