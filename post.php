<?php
$incomePost = json_decode(file_get_contents('php://input'), true);
// $incomePost = $_POST['url'];

$token = 'kjydPdXPiz4imzPV';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, origin");

if(isset($incomePost['key']) && $incomePost['token'] == $token) {
    if($incomePost['key'] == 'url') {
        $str= $incomePost['url'];

        $fd = fopen("test.txt", 'r+');
        ftruncate($fd, 0); // очищаем файл
        fwrite($fd, "$str"); 
        fclose($fd);
    
        $fd = fopen("currentUrl.txt", 'r+');
        ftruncate($fd, 0); // очищаем файл
        fwrite($fd, "$str"); 
        fclose($fd);
    
        echo json_encode('success');
    } 
    
    if($incomePost['key'] == 'currentUrl') {
        $file = file_get_contents('./currentUrl.txt');
        echo $file;
    }
} else {
    echo 'error';
}


