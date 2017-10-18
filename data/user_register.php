<?php
    header("Content-type:text/plain;charset=uft-8");
    @$n = $_REQUEST['uname'] or die("-2");
    @$p = $_REQUEST['upwd'] or die("-3");
    @$e = $_REQUEST['uemail'] or die("-4");

    $dbConnection = new PDO ("mysql:host=127.0.0.1;dbname=vocal_school","root","");
    $PDOStatement = $dbConnection->prepare("SELECT uid FROM vocal_user WHERE uname=:n");
    $PDOStatement->execute(array(':n' => $n));
    $result = $PDOStatement->fetch(PDO::FETCH_ASSOC);
    if($result===false){
        $PDOStatement = $dbConnection->prepare('INSERT INTO vocal_user VALUES (NULL,:n,:p,:e)');
        $result=$PDOStatement->execute(array(':n' => $n,':p'=>$p,':e'=>$e));
        if($result===false){
        echo "-1";
        }else{
        //获取连接执行的最后一条insert语句->id	 
        echo $dbConnection->lastInsertId();
        }
        echo "-1";
    }
    
?>