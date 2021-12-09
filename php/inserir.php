<?php

    $nome = $_POST["Nome_Usuario"];
    $sobrenome = $_POST["Sobrenome_Usuario"];
    $email = $_POST["Email_Usuario"];
    $senha = $_POST["Senha_Usuario"];
    $username = $_POST["User_Usuario"];
    $con = mysqli_connect("localhost:3306", "root", "", "banco_tde");

    $verifica_user = mysqli_query($con, "SELECT User_Usuario FROM usuario WHERE User_Usuario = '$username'");

    $verifica_email = mysqli_query($con, "SELECT Email_Usuario FROM usuario WHERE Email_Usuario = '$email'");

    if (mysqli_num_rows($verifica_user) > 0){
        echo "Esse nome de usuário já existe";

    } else{
        if (mysqli_num_rows($verifica_email) > 0){
            echo "Esse e-mail já existe";

        } else{
            mysqli_query($con, "INSERT INTO usuario (Nome_Usuario, Sobrenome_Usuario, Email_Usuario, User_Usuario, Senha_Usuario) VALUES('$nome', '$sobrenome', '$email', '$user', '$senha')");
        }
    }

?>