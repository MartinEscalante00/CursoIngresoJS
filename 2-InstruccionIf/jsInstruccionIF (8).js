function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;
	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value
	
	if(estadoCivil !="soltero" && edad<18)
	{ 
		console.info("no hacer nada",estadoCivil)
		
	}else
			{
		
				if( estadoCivil = "soltero" && edad>18)
							alert("es soltero y no es menor");

			}

	


}//FIN DE LA FUNCIÓN