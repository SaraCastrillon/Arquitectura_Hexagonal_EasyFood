function conectarUsuarios(user,pass){
	$.ajax({
		method: 'POST',
		data: {usuario:user,clave:pass},	
		url:"http://54.186.255.219/easyfood/querys/listarbd.php?tipo=validarusuario",
		success: function (data) {
			if(data == "si"){
				return true;
			}else{
				return false;
			}
			
		},
		error: function (error){
			$.mobile.hidePageLoadingMsg();
			alert("Ocurrio un problema");
		}
	});
}