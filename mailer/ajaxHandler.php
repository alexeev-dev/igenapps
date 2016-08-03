<?php
// ящик, куда отправлять письма
$toMail = 'artem_zh@mail.ru';
// ящик, который будет в письме в поле 'от'
$fromMail = 'artem_zh@mail.ru';
// имя, которое будет в письме в поле 'от'
$fromName = 'IG Admin';
// тема письма
$subject = 'New message';
// ---------------------------------------

if (isset($_POST['id']) && $_POST['id'] != '') {
	switch ($_POST['id']) {
		// contact form
		case 1:
			include_once "class.phpmailer.php";
			error_reporting(E_PARSE);

			$message = "";
			$message .= (isset($_POST['name']) && $_POST['name'] != '') ? ("Name: ".htmlspecialchars($_POST['name'], ENT_QUOTES)."<br>\n") : '';
			$message .= (isset($_POST['lastname']) && $_POST['lastname'] != '') ? ("Last name: ".htmlspecialchars($_POST['lastname'], ENT_QUOTES)."<br>\n") : '';
			$message .= (isset($_POST['email']) && $_POST['email'] != '') ? ("Email: ".htmlspecialchars($_POST['email'], ENT_QUOTES)."<br>\n") : '';
			$message .= (isset($_POST['company']) && $_POST['company'] != '') ? ("Company: ".htmlspecialchars($_POST['company'], ENT_QUOTES)."<br>\n") : '';
			$message .= (isset($_POST['phone']) && $_POST['phone'] != '') ? ("Phone: ".htmlspecialchars($_POST['phone'], ENT_QUOTES)."<br>\n") : '';
			$message .= (isset($_POST['address']) && $_POST['address'] != '') ? ("Address: ".htmlspecialchars($_POST['address'], ENT_QUOTES)."<br>\n") : '';
			$message .= (isset($_POST['city']) && $_POST['city'] != '') ? ("City: ".htmlspecialchars($_POST['city'], ENT_QUOTES)."<br>\n") : '';
			$message .= (isset($_POST['site']) && $_POST['site'] != '') ? ("Site: ".htmlspecialchars($_POST['site'], ENT_QUOTES)."<br>\n") : '';
			$message .= (isset($_POST['time']) && $_POST['time'] != '') ? ("Time: ".htmlspecialchars($_POST['time'], ENT_QUOTES)."<br>\n") : '';
			$message .= (isset($_POST['comment']) && $_POST['comment'] != '') ? ("Comment: ".htmlspecialchars($_POST['comment'], ENT_QUOTES)."<br>\n") : '';
			$message .= (isset($_POST['message']) && $_POST['message'] != '') ? ("Message: ".htmlspecialchars($_POST['message'], ENT_QUOTES)."<br>\n") : '';
			
			$message .= (isset($_POST['page']) && $_POST['page'] != '') ? ("Page: ".htmlspecialchars($_POST['page'], ENT_QUOTES)."<br>\n") : '';

			$subject = (isset($_POST['subject']) && $_POST['subject'] != '') ? $_POST['subject'] : $subject;
			
			$mail = new PHPMailer();
			$mail->IsSendmail();
			$mail->CharSet = 'utf-8';
			$mail->IsHTML(true);
			$mail->From		= $fromMail;
			$mail->Sender	= $fromEmail;
			$mail->FromName	= $fromName;
			$mail->Subject	= $subject;
			$mail->Body		= '<html><head></head><body>'.$message.'</body></html>';
			$mail->AltBody 	= strip_tags($message);
			$mail->AddAddress($toMail);

			if ($mail->send()) {
				echo 'sent';
			} else {
				echo -1;
			}
			break;

		default:
			echo -1;	
	}
} else {
	echo -1;
}
?>