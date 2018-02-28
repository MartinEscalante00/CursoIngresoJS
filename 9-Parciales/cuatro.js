function Mostrar()
{
	var numero1; var numero2;
	var multiplicacion;
	var resta; 
	var suma; 
	numero1=prompt("ingrese numero");
	numero1=parseInt(numero1);
	numero2=prompt("ingrese numero"); 
	numero2=parseInt(numero2) 
	if(numero1 == numero2) 
	{ 
	    multiplicacion=numero1*numero2 
		document.write("la multiplicaciones"+multiplicacion);
	}

	if(numero1> numero2)
	{ 
	  resta=numero1-numero2
	   document.write(+resta);

	} 
	if(numero1<numero2)
	{ 
	    suma=numero1 + numero2
	    document.write(+suma); 
	} 
	    
}
	
	