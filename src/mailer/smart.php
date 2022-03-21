<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';                             	

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = '';
$mail->Password = 'DYTHRGV7W9mQyzn6zzza';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('', 'Portfolio');
$mail->addAddress('');
$mail->isHTML(true);

$mail->Subject = 'Данные';
$mail->Body    = '
	Пользователь оставил данные: <br> 
	Имя: ' . $name . ' <br>
	E-mail: ' . $email . ' <br>
	Сообщение от ползователя: ' . $text . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>