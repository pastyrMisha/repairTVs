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
    // $mail->addAddress('tv-remservis@mail.ru');
    $mail->addAddress('skkonkurent@yandex.ru');
    // Тема письма
    $mail->Subject = 'Заявка на ремонт телевизора Фикс Прайс ТВ со скидкой 20%';

    // Тело письма
    $body = '<h1>Заявка на ремонт телевизора Фикс Прайс ТВ Сервис со скидкой 20% после 15:00</h1>';

    if(trim(!empty($_POST['footname']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['footname'].'</p>';
    }
    if(trim(!empty($_POST['foottel']))){
        $body.='<p><strong>Телефон клиента:</strong> '.$_POST['foottel'].'</p>';
    }
    $mail->Body = $body;

    // Отправляем
    if ($mail->send()) {
        $message = '3';
    }
    
    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>