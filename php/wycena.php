<?php
    $email = $_REQUEST["email"];
    $toggle = $_REQUEST["toggle"];
    $range_www = $_REQUEST["range_www"];
    $lang = $_REQUEST["lang"];
    $range_lang = $_REQUEST["range_lang"];
    $url_website = $_REQUEST["url_website"];
    $url_liked1 = $_REQUEST["url_liked1"];
    $url_liked2 = $_REQUEST["url_liked2"];
    $toggle2 = $_REQUEST["toggle2"];
    $toggle3 = $_REQUEST["toggle3"];
   
    $zawartosc_email = "<b>Bezpłatna wycena</b><br/><br/>Adres email nadawcy: <b>".$email."</b><br/><br/>System CMS: <b>".$toggle."</b><br/><br/>Orientacyjna liczba podstron: <b>".$range_www."</b><br/><br/>Dodatkowe wersje językowe: <b>".$lang."</b> Ilość:  <b>".$range_lang."</b><br/><br/>Adres aktualnej strony internetowej: <b>".$url_website."</b><br/><br/>Linki do stron, które Ci się podobają: <b><br/>".$url_liked1."</b><br/><b>".$url_liked1."</b><br/><br/>Czy mam zredagować treści na twoją stronę www?: <b>".$toggle2."</b><br/><br/>Czy mam wykonać grafiki na twoją stronę internetową?: <b>".$toggle3."</b>";                                   

    $adres_do = "jakubwirfel@gmail.com";
    $adres_od = $email;

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= 'From: '.$adres_od.''."\r\n";

    $tmp = mail($adres_do,'Bezpłatna wycena',$zawartosc_email,$headers);
    if($tmp) header("Location: ../ofert.html");
    else echo 'Wystąpił błąd';
?>