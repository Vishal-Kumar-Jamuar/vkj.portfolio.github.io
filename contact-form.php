<?php
    $name=$POST['name'];
    $visitor_email=$_POST['email'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];

    $email_from="vishal-kumar-jamuar.github.io/vkj.portfolio.github.io";
    $email_body="User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                    "User Message:$message.\n";

    $to="vishujamuar05@gmail.com";
    $headers="From:$email_from \r\n";
    $headers="Reply-To:$visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);
    header("Location:index.html");

    ?>
