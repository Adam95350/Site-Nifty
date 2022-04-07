<?php
  class Model{
    private $bd;
    private static $instance = null;

    private function __construct(){

      try {
        $this->bd = new PDO('mysql:host=localhost;dbname=nifty;port=3307', 'root', '');
        // set the PDO error mode to exception
        $this->bd->query("SET NAMES 'utf8'");
        $this->bd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      }catch(PDOException $e){
        echo "Connection failed: " . $e->getMessage();
      }

    }

    public static function getClass(){
      if(self::$instance === null){
        self::$instance = new self();
      }
      return self::$instance;
    }

    public function getByKey($key){
        $req = $this->bd->prepare(' SELECT * FROM editable_text WHERE Name = :key');
        $req->bindValue(':key', $key);
        $req->execute();
        $tab = $req->fetchAll(PDO::FETCH_ASSOC);
        return $tab[0];
    }
  }
?>
