<!DOCTYPE html>
<html>

<body>
    <?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = "Name: " . $name . "\r\n" . "Email: " . $email . "\r\n" .
        "Subject: " . $subject . "\r\n" . "Message: " . $_POST['message'];

    $to = "contact@tonyvu.io";

    $headers = "From:user@domain.com";

    mail($to, $subject, $message, $headers);
    ?>
</body>

</html>