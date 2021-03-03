<?php
$incomePost = json_decode(file_get_contents('php://input'), true);
// $incomePost = $_POST['url'];

$fd = fopen("test.txt", 'r+');
        $str= $incomePost['url'];

        ftruncate($fd, 0); // очищаем файл
        fwrite($fd, "$str"); 
        fclose($fd);

        echo 'success';
