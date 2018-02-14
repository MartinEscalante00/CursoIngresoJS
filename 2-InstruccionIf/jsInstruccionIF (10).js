function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota= Math.floor((Math.random() * 10) + 1);
	console.log(nota)
	if(nota >8)
	{
		alert("Excelente" + nota);
	}
	else 
	{
		if(nota >=4)
		{
			alert("aprobo" + nota);
		}
		else
		{
			alert("Vamos la proxima se puede"+ nota);
		}

		

	}
	


}//FIN DE LA FUNCIÓN