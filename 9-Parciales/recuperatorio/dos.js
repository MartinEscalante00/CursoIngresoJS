function Mostrar()
{
   var importe;
  var importeFinal;
  var precioFinal;

  importe=prompt("ingrese importe");
  importe=parseInt(importe)
  importeFinal=importe*0.21
  precioFinal= importe+importeFinal

  document.getElementById('importeFinal').value=precioFinal;
}
