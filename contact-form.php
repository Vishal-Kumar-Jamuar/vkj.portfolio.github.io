<?php
$name=$_POST['name'];
$visitor_email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];

    
$email_body="User Name:". $name . "\r\n User Email:". $visitor_email . "\r\n User Message:". $message .;

$to="vishujamuar05@gmail.com";
$headers="From:$email_from \r\n";
$headers="Reply-To:$visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);
header("Location:index.html");

?>
