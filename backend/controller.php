<?php
header('Content-Type: application/json');
require_once("../backend/Conectar.php");
require_once("../backend/models.php");

$alquilar = new Alquiler();
$body = json_decode(file_get_contents("php://input"), true);


switch ($_GET['op']) {
    case 'getAll':
        $datos = $alquilar->get_clientes();
        echo json_encode($datos);
        break;
    case 'insert':
        $datos = $alquilar->insert_cliente( $body['nombre_constructora'], $body['nit_constructora'], $body['nombre_representante'], $body['email_contacto'], $body['telefono_contacto']);
        echo json_encode("Datos enviados satisfactoriamente");
        break;
    case 'one':
        $datos = $alquilar->getOneCliente($_GET['id']);
        echo json_encode($datos);
        break;
    case 'update':
        $datos = $alquilar->updateCliente($body['id_constructora'], $body['nombre_constructora'], $body['nit_constructora'], $body['nombre_representante'], $body['email_contacto'], $body['telefono_contacto']);
        echo json_encode("Datos actualizados correctamente");
        break;
    case 'delete':
        $datos = $alquilar->deleteCliente($body['id_constructora']);
        echo json_encode("Datos eliminado correctamente");
        break;
    default:
        # code...
        break;
}


?>