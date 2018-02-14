function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el inviero");
			break;
		
		case "julio":
		case "Agosto":
			alert("abrigate que hace frio");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("ya paso el invierno,ahora calor");
			break;			
	}







}//FIN DE LA FUNCIÓN