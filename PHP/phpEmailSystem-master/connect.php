<?php

  try{
    $db = new PDO("mysql:host=localhost;dbname=phpTutorial",'root','');
  }catch(PDOException $e){
    echo 'host error ... <br>';
    echo $e->getMessage(); 
    die();
  };

?>