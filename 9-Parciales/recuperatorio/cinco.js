function Mostrar()
{
	var mes;

	mes=prompt("ingrese mes");

	switch(mes)
	{
		case "diciembre":
		alert("se vienen las fiestas");
		break;

		case "enero":
		alert("comienza el año");
		break;

		default:
		alert("no es enero, ni diciembre")
		break;
		
	}
}
