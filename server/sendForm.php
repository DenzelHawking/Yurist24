<?php if (isset($_POST["email"], $_POST["name"], $_POST["phone"])) {
 $to = "denzelhawking@gmail.com";
 $subject = "Письмо с сайта";
 $charset = "utf-8";
 $headerss ="Content-type: text/html; charset=$charset\r\n";
 $headerss.="MIME-Version: 1.0\r\n";
 $headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";
 $msg = "Имя: ".$_POST["name"]."\n";
 $msg .= "Почта: ".$_POST["email"]."\n";
 $msg .= "Номер телефона: ".$_POST["phone"]."\n";
 $msg .= "Сообщение: ".$_POST["message"]."\n";
 mail($to, $subject, $msg, $headerss);
 echo "Сообщение успешно отправлено";
}?>
