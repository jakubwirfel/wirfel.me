<?php
    $email = $_REQUEST[email];
    $details = $_REQUEST[details];
    
   
    $zawartosc_email = "Adres email nadawcy: <br/><b>".$email."</b><br/><br/>Wiadomość: <br/><b>".$details."</b>";                                   

    $adres_do = "jakubwirfel@gmail.com";
    $adres_od = $email;

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= 'From: '.$adres_od.''."\r\n";

    $tmp = mail($adres_do,'Wiadomosc kontakt',$zawartosc_email,$headers);
    if($tmp) header("Location: ../ofert.html");
    else echo 'Wystąpił błąd';
?>