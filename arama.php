<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require "baglan.php";

$kelime = htmlspecialchars($_POST['kelime']);

if (!empty($kelime)){
	$sorgu = "SELECT * FROM postlar WHERE baslik LIKE :arama LIMIT 6";
	$sonuc = $db->prepare($sorgu);
	$sonuc -> bindValue(":arama",'%'.$kelime.'%');
	$sonuc -> execute();
}

if ($sonuc->rowCount()!=0){
  
	foreach ($sonuc as $key) {		
		echo '<div class="list-group">
          <a href="#" class="list-group-item list-group-item-action">';
        echo $key['baslik'];
        echo  '</a></div>';
	}
}else{
	echo ' <div class="alert alert-warning" role="alert">Sonuç yok...</div>';
}

?>