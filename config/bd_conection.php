
<?php
// require 'vendor/autoload.php';
require __DIR__ . '/../vendor/autoload.php';
 
// Using Medoo namespace
use Medoo\Medoo;
 
// Initialize
$database = new Medoo([
    'database_type' => 'mysql',
    'database_name' => 'secuenc1_ewallet',
    'server' => 'secuenciaestrategica.com',
    'username' => 'secuenc1_ewallet',
    'password' => 'Eyy2Bb2Wz'
]);
