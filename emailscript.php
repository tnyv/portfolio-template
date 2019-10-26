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

    $sent = mail($to, $subject, $message, $headers);

    if($sent){
        echo "<span style='color:green; font-weight:bold;'>
        Thank you for contacting us, we will get back to you shortly.
        </span>";
    }
    else{
        echo "<span style='color:red; font-weight:bold;'>
        Sorry! Your form submission is failed.
        </span>";
        }
    
    ?>
</body>

</html>