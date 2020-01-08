<?php

    error_reporting(E_ALL);
    ini_set('memory_limit', '-1');

    session_name("GRUPODAFEL");
    session_start();

    //date_default_timezone_set("America/Sao_Paulo");
    date_default_timezone_set("America/Araguaina");

    include "config.php";
    include "func.php";

    loadClass();
    $smarty = new Smarty();

    $get = (Object)$_GET;
    $post = (Object)$_POST;

?>