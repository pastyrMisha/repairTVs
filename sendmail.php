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
    $mail->Subject = 'Заявка на ремонт телевизора Фикс Прайс ТВ Сервис со скидкой 30%';

    // Тело письма
    $body = '<h1>Заявка на ремонт телевизора Фикс Прайс ТВ Сервис со скидкой 30% до 15:00</h1>';

    if(trim(!empty($_POST['tel']))){
        $body.='<p><strong>Телефон клиента:</strong> '.$_POST['tel'].'</p>';
    }
    $mail->Body = $body;

    // Отправляем
    if ($mail->send()) {
        $message = '1';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>