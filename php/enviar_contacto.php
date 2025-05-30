<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars(trim($_POST["nombre"]));
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $telefono = htmlspecialchars(trim($_POST["telefono"]));
    $asunto = htmlspecialchars(trim($_POST["asunto"]));
    $mensaje = htmlspecialchars(trim($_POST["mensaje"]));
    $aceptaTerminos = isset($_POST["terminos"]);

    if (!$nombre || !$email || !$asunto || !$mensaje || !$aceptaTerminos) {
        echo "Por favor, completa todos los campos obligatorios.";
        exit;
    }

    // 1. Conexión a SQL Server
    $serverName = "localhost"; // o IP o nombre del servidor
    $connectionOptions = array(
        "Database" => "Chasqui_BD",
        "Uid" => "sa",
        "PWD" => "1234",
        "CharacterSet" => "UTF-8"
    );

    $conn = sqlsrv_connect($serverName, $connectionOptions);

    if (!$conn) {
        die("Error de conexión: " . print_r(sqlsrv_errors(), true));
    }

    // 2. Insertar los datos
    $sql = "INSERT INTO MensajesContacto (nombre, email, telefono, asunto, mensaje)
            VALUES (?, ?, ?, ?, ?)";
    $params = array($nombre, $email, $telefono, $asunto, $mensaje);
    $stmt = sqlsrv_query($conn, $sql, $params);

    if (!$stmt) {
        echo "Error al guardar en base de datos: " . print_r(sqlsrv_errors(), true);
    } else {
        echo "Mensaje enviado y guardado correctamente. ¡Gracias por contactarnos!";
    }

    // 3. (Opcional) Enviar el correo también
    /*
    $destinatario = "info@chasqui.com";
    $titulo = "Nuevo mensaje de contacto: $asunto";
    $contenido = "Nombre: $nombre\nCorreo: $email\nTeléfono: $telefono\nAsunto: $asunto\nMensaje:\n$mensaje\n";
    $cabeceras = "From: $email\r\nReply-To: $email\r\n";
    mail($destinatario, $titulo, $contenido, $cabeceras);
    */

    sqlsrv_close($conn);
} else {
    echo "Acceso no permitido.";
}
?>