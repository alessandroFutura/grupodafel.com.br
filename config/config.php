<?php

    define("PATH_ROOT", "c:/wamp/www/grupodafel.com.br/");
    define("PATH_CLASS", PATH_ROOT . "class/");
    define("PATH_CONFIG", PATH_ROOT . "config/");
    define("PATH_MODEL", PATH_ROOT . "model/");
    define("PATH_SMARTY", PATH_ROOT . "smarty/");
    define("PATH_TEMPLATES", PATH_ROOT . "templates/");
    define("PATH_TEMPLATES_COMPILED", PATH_TEMPLATES . "compiled/");

    DEFINE("ROUTE", $_SERVER["REQUEST_URI"] == "/" ? "home" : str_replace("/","",$_SERVER["REQUEST_URI"]));

?>