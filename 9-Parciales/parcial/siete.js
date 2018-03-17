function Mostrar()
{
	var notas;
	var acumulador=0;
	var contador=0;
	var sexo;
	var mayorNota;
	var menorNota;
	var mayor=0;
	var menor=10;
	var cantVa=0;

	while(contador<5)
	{
		contador++
		notas=prompt("ingrese nota")
		notas=parseInt(notas);

		while(notas<0 || notas>10 || isNaN(notas))
		{
			notas=prompt("ingrese nota")
			notas=parseInt(notas);	
		}

		sexo=prompt("ingrese sexo")
		while(sexo !="f" && sexo!="m")
		{
			sexo=prompt("ingrese sexo")
		}

		acumulador=acumulador+notas;
		promedio=acumulador/contador;

		mayorNota=notas;
		menorNota=notas;

		if(mayorNota>mayor)
		{
			mayor=mayorNota
		}
		if(menorNota<menor)
		{
			menor=menorNota
		}


		if(notas>6 && sexo=="m")
		{
			cantVa++;
		}

	}

	alert("el promedio es "+promedio);
	alert("la mayor nota es "+mayor);
	alert("la menor nota es "+menor);
	alert("la cantidad de varones son "+cantVa);


}
