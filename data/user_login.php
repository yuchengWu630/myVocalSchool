<?php
    header("Content-type:text/plain;charset=uft-8");
    @$n = $_REQUEST['uname'] or die("-2");
    @$p = $_REQUEST['upwd'] or die("-3");
    $dbConnection = new PDO ("mysql:host=127.0.0.1;dbname=vocal_school","root","");
    $PDOStatement = $dbConnection->prepare("SELECT uid FROM vocal_user WHERE uname=:n AND upwd=:p");
    $PDOStatement->execute(array(':n' => $n,':p'=>$p));
    $result = $PDOStatement->fetch(PDO::FETCH_ASSOC);
    if($result==true){
        echo '{"code":200,"msg":"login succ"}';
    }
    else{
        echo '{"code":400,"msg":"uname or upwd err"}';
    }
?>