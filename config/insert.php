<?php

include './bd_conection.php';

$email = $_POST["email"];

//validation
$data = $database->select('email', 
    [
        'email'
    ], 
    [   
        'email' => $email //where
    ]
);

if(empty($data) )
{
    $database->insert("email", [
            "email" => $email,
        ]);
        echo("2");//no registrado
}else
    {
        echo("1"); //registrado
    }

