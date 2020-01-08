<?php

    function loadClass()
    {
        spl_autoload_register(function( $className ){
            if( file_exists( PATH_CLASS . "{$className}.class.php" ) ){
                require_once PATH_CLASS . "{$className}.class.php";
                return;
            }
            if( file_exists( PATH_SMARTY . "{$className}.class.php" ) ){
                require_once PATH_SMARTY . "{$className}.class.php";
                return;
            }
            if( file_exists( PATH_MODEL . "{$className}.class.php" ) ){
                require_once PATH_MODEL . "{$className}.class.php";
                return;
            }
        });
    }

?>