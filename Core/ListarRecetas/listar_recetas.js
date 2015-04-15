function conectarRecetas(){
	$.ajax({
		method: "GET",
		url: "http://54.186.255.219/easyfood/querys/listarbd.php?tipo=listarrecetas",
		dataType: 'xml',
		success:function(data){
			datos = data;
			return data;
		},
		error:function(){
			alert("error");
		}
	});
}