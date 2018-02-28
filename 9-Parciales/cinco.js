function Mostrar()
{
	var dia;
	dia=prompt("ingresar dia");

	switch(dia)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			alert("a trabajar");
		break;
		case"sabado":
		case"domingo":
			alert("es fin de semana");
		break;

	}
	
}
