conectar();
function crearRecetas(){
	var receta;
	var recetas = [];
	$(datos).find("receta").each(function () {
		var nombre, descripcion, imagen;
	    nombre = $(this).find("Nombre_Recetas").text();
	    descripcion = $(this).find("Descripcion").text();
	    image = $(this).find("Foto").text();
	    receta = Receta(nombre,descripcion,image);
		recetas.push(receta);
	});
	$(recetas).each(function(indice, elemento) {
		console.log('El elemento con el índice '+indice+' contiene '+ elemento.nombre);
	});
}