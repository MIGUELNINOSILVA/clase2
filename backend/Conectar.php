<?php
class Conectar{
    protected $db;

    public function Conexion(){
        try {
            $conectar = $this->db = new PDO("mysql:local=localhost;dbname=alquilartemis", "root", "");
            return $conectar;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function set_names(){
        return $this->db->query("set names 'utf8'");
    }
}

?>