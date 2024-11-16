<?php
    // Retrieving form data submitted via POST method and assigning to variables
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Defining the email address that will appear as the sender
    $email_from = 'ps545530@gmail.com';

    // Defining the email subject for the recipient
    $email_subject = "New Form Submission";
    
    // Creating the email body by concatenating form data into a message
    $email_body =   "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                    "Subject: $subject.\n".
                    "User Message: $message.\n";

    // Setting the recipient email address
    $to = "ps545530@gmail.com";

    // Setting the 'From' header to specify the sender's email
    $headers = "From: $email_from \r\n";

    // Adding a 'Reply-To' header so that the recipient can directly reply to the user's email
    $headers .= "Reply-To: $visitor_email \r\n";

    // Sending the email using PHP's mail() function
    mail($to, $email_subject, $email_body, $headers);

    // Redirecting the user to 'contact.html' after the email is sent
    header("Location: contact.html");
?>
