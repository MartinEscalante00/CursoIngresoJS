function Mostrar()
{
//tomo la edad  
var estadoCivil;
var edad;
edad=document.getElementById('edad').value;
estadoCivil=document.getElementById('estadoCivil').value;
if(estadoCivil !="Soltero" )
{
	if(edad <18)
	{
		alert("Es muy pequeño para no ser soltero");
	}
}

	


}//FIN DE LA FUNCIÓN