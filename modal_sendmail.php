<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    // От кого письмо
    $mail->setFrom('support@skuptv.ru', 'СЦ по ремонту ТВ');
    // Кому отправить
    $mail->addAddress('tv-remservis@mail.ru');
    $mail->addAddress('skkonkurent@yandex.ru');
    // Тема письма
    $mail->Subject = 'Заявка на обратный звонок';

    // Тело письма
    $body = '<h1>Заказ обратного звонка без подробностей</h1>';

    if(trim(!empty($_POST['modaltel']))){
        $body.='<p><strong>Телефон клиента:</strong> '.$_POST['modaltel'].'</p>';
    }
    
    $mail->Body = $body;

    // Отправляем
    if ($mail->send()) {
        $message = '2';
    } 

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>