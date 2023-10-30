<?php  
    require('conexion1.php');
    insertar($conexion);

     function insertar($conexion){
        $email = $_POST['email'];
        $consulta = "INSERT INTO descuento(Email)
        VALUES ('$email')";
        mysqli_query($conexion, $consulta);
        mysqli_close($conexion);
     }
     
     header(header: 'Location: http://localhost/Paginas_Web/AntojitosP3/aimep3pag1/index.html');

?>