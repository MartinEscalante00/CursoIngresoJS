function Mostrar()
{



	var horas;
	horas=prompt("ingrese hora");
	switch(horas)
	{
		

		case "20":
		case "21":
		case "22":
		case "23":
		case "24":
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		alert("es de noche")
			if(horas<7)
			{
				alert("me voy a un bar");
			}
		break;
	
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
		alert("mañana")
		if(horas<11)
		{
			alert("a desayunar");
		}
		break;

		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
		alert("tarde de mate");
		break;

		default:
		alert("error");
		break;





		
	}







}
