<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil nilai dari formulir
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Email penerima
    $to = "fikriahmat29@gmail.com"; // Ganti dengan alamat email Anda

    // Judul email
    $email_subject = "Pesan dari $full_name: $subject";

    // Isi email
    $email_body = "Anda telah menerima pesan dari:\n\n";
    $email_body .= "Nama: $full_name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Pesan:\n$message";

    // Header email
    $headers = "From: $email";

    // Kirim email
    mail($to, $email_subject, $email_body, $headers);

    // Redirect ke halaman "success"
    header('Location: success.html');
}
?>