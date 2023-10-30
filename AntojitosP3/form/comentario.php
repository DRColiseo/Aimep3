<?php  
    require('conexion.php');
    insertar($conexion);

    function insertar($conexion){
       $email = $_POST['email'];
       $telefono = $_POST['telefono'];
       $com = $_POST['com'];
       $nombre = $_POST['nombre'];
       $consulta = "INSERT INTO comentarios(Email,Nombre,Numero,Mensaje)
       VALUES ('$email', '$nombre', '$telefono', '$com')";
       mysqli_query($conexion, $consulta);
       mysqli_close($conexion);
       
    }
    
    header(header: 'Location: http://localhost/Paginas_Web/AntojitosP3/form/segunda.html');

?>