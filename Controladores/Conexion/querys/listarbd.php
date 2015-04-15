<?php
include_once 'connectionbd.php';
include_once 'MysqltXML.php';
$tipo_funcion = $_GET['tipo'];
switch ($tipo_funcion)
{
    case"validarusuario":
        $usuario = $_POST['usuario'];
        $clave = $_POST['clave'];
        $rst = mysql_query("SELECT idUsuarios FROM Usuarios WHERE Nombre_Usuario = '$usuario' AND Clave = '$clave'",$conexion);
        $numreg = mysql_num_rows($rst);
        if($numreg != 0)
        {
           print("si"); 
        }
        else
        {
            print("no");
        }
    break;
    case "listarrecetas":
        $rst = mysql_query("SELECT * FROM Recetas",$conexion);
        $numreg = mysql_num_rows($rst);
        if($numreg != 0)
        {
           $xml = sqlToXml($rst, "recetas", "receta");
		   print $xml; 
        }
        else
        {
            print "no";
        }
    break;
}
?>