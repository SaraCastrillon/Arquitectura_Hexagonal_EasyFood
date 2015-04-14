conectar();
function crearRecetas(){
	var receta,recetas;
	$(datos).find("receta").each(function () {
		var nombre, descripcion, imagen;
	    nombre = $(this).find("Nombre_Recetas").text();
	    descripcion = $(this).find("Descripcion").text();
	    image = $(this).find("Foto").text();
	    receta = Receta(nombre,descripcion,image);
		alert(nombre);
	});
	
}