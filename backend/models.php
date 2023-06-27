<?php
class Alquiler extends Conectar{
    public function get_clientes(){
        try {
            $conectar = parent::Conexion();
            parent::set_names();
            $stm = $conectar->prepare("SELECT * FROM constructoras");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function insert_cliente( $nombre_constructora, $nit_constructora, $nombre_representante, $email_contacto, $telefono_contacto){
        try {
            $conectar = parent::Conexion();
            parent::set_names();
            $stm = $conectar->prepare("INSERT INTO constructoras ( nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto) VALUES (?,?,?,?,?    )");
            $stm->bindValue(1, $nombre_constructora);
            $stm->bindValue(2, $nit_constructora);
            $stm->bindValue(3, $nombre_representante);
            $stm->bindValue(4, $email_contacto);
            $stm->bindValue(5, $telefono_contacto);
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    
    public function getOneCliente($id_constructora){
        try {
            $conectar = parent::Conexion();
            parent::set_names();
            $stm = $conectar->prepare("SELECT * FROM constructoras WHERE id_constructora = ?");
            $stm->bindvalue(1, $id_constructora);
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        }catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function updateCliente($id_constructora,$nombre_constructora, $nit_constructora, $nombre_representante, $email_contacto, $telefono_contacto){
        try {
            $conectar = parent::Conexion();
            parent::set_names();
            $stm = $conectar->prepare("UPDATE constructoras SET nombre_constructora = ?, nit_constructora = ?, nombre_representante = ?, email_contacto = ?, telefono_contacto = ? WHERE id_constructora = ?");
            $stm->bindvalue(1, $nombre_constructora);
            $stm->bindvalue(2, $nit_constructora);
            $stm->bindvalue(3, $nombre_representante);
            $stm->bindvalue(4, $email_contacto);
            $stm->bindvalue(5, $telefono_contacto);
            $stm->bindvalue(6, $id_constructora);
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        }catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function deleteCliente($id_constructora){
        try {
            $conectar = parent::Conexion();
            parent::set_names();
            $stm = $conectar->prepare("DELETE FROM constructoras WHERE id_constructora = ?");
            $stm->bindvalue(1, $id_constructora);
            $stm->execute();
            
        }catch (Exception $e) {
            return $e->getMessage();
        }
    }
}

?>