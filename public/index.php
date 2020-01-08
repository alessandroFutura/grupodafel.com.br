<?php

    include "../config/start.php";

    foreach( get_defined_constants(true)["user"] as $constant => $value ){
        $smarty->assign( $constant, $value );
    }

    $smarty->display(PATH_TEMPLATES . "index.html");

?>