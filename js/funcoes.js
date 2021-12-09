var Igual = false;
var Completo = false;

/** VALIDA O PREENCHIMENTO DOS CAMPOS **/
function camposPreenchidos(){
    nome = document.getElementById("nome").value;
    sobrenome = document.getElementById("sobrenome").value;
    email = document.getElementById("email").value;
    user = document.getElementById("username").value;
    senha = document.getElementById("senha").value;
    confirma = document.getElementById("confirma").value;

    //confirma a senha
    if (senha != confirma){
        alert("As senhas são diferentes");
    } else {
        var Igual = true;
    }

    //confere se todos os campos foram preenchidos
    if (nome == '' || sobrenome == '' || email == '' || user == '' || senha == '' || confirma == ''){
        alert("Preencha todos os campos");
    } else{
        var Completo = true;
    }

    //se os dados conferidos estiverem todos certos, essa função dá um alerta e cadastra o usuario
    if (Igual == true && Completo == true){
        alert("Bem vindo!");
        fLocalComunicaServidor();
    }
}

/** CONEXÃO COM O BACK-END **/

function fLocalComunicaServidor(){

    var valores = $("form").serialize();

    $.ajax({

        type: "POST",
        dataType: "json",
        data: valores,
        url: "php/inserir.php",
        success:function(retorno){

        }
    })
}