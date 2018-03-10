function Mostrar()
/**/
{
	var contador=0;
	var respuesta="continuar";
	var temperatura;

	while(respuesta!="no")
	{//inicio de llave

		temperatura=prompt("ingrese temperatura");
		temperatura=parseInt(temperatura);

		while(temperatura<-100 || temperatura >100 || isNaN(temperatura))
		{
			temperatura=prompt("ingrese temperatura");
			temperatura=parseInt(temperatura);
		}

		nombre=prompt("ingrese nombre");
		while(! isNaN(nombre))
		{
			nombre=prompt("ingrese nombre");
		}

		sexo=prompt("ingrese sexo")






		respuesta=prompt("ingrese no para salir");


	}//fin de llave



}
