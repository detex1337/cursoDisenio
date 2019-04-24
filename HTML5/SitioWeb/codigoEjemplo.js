function cambio() {
  var x = document.getElementById("demo");
  x.style.display = "none";
}

var tamanio = 0;
function agrandar()
{
	var tabla = document.getElementById("tabla");
	tamanio++;
	tabla.style.border = tamanio+"px";
	console.log(tamanio+" px");
}

function peke()
{
	var tabla = document.getElementById("tabla");
	tabla.style.border = "1px solid #000";
}