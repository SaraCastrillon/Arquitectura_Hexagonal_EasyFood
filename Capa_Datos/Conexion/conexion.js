var datos;
function conectar(){
	$.ajax({
		method: "GET",
		url: "http://54.186.255.219/easyfood/querys/listarbd.php?tipo=listarrecetas",
		dataType: 'xml',
		success:function(data){
			datos = data;
			alert(data);
		},
		error:function(){
			alert("error");
		}
	});
}