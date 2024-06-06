
const Password = document.getElementById('senha');
const icon = document.getElementById('icon');

function showHide() {
    if (Password.type == 'password') {
        Password.setAttribute('type', 'text');
        icon.classList.add('hide');
    } else {
        Password.setAttribute('type', 'password');
        icon.classList.remove('hide');
    }
}


let btn = document.getElementById("btn")
let resultado = document.getElementById("resultado")

let arrLogin = []

function logar() {


    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value


    const login = {
        email: email,
        senha: senha
    }

    arrLogin.push(login)
    console.log(arrLogin)

    //resultado.innerHTML = "NOME: " + nome + " SOBRENOME: " + sobrenome + "."


    //console.log(nome, sobrenome, categoria)
}


btn.addEventListener('click', logar)



