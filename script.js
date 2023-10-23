let botaoDeslizante = document.querySelector("#botao-deslizante")
let botaoGerarSenha = document.querySelector("#botao-gerar-senha")

let tamanhoDaSenha = document.querySelector("#tamanho-senha")
let senha = document.querySelector("#senha")

let containerSenha = document.querySelector("#container-senha")

let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPGRSTUVWXYZ123456789!@_-*%&#/";
let copiarSenha = "";

tamanhoDaSenha.innerHTML = botaoDeslizante.value 
botaoDeslizante.oninput = function() {
    tamanhoDaSenha.innerHTML = this.value;
}

function geradorDeSenha() {
    let senhaGerada = ""
    for(let i = 0, n = caracteres.length; i < botaoDeslizante.value; ++i) {
        senhaGerada += caracteres.charAt(Math.floor(Math.random() * n))
    }
    containerSenha.classList.remove("esconder")
    senha.innerHTML = senhaGerada
    copiarSenha = senhaGerada
}

function copiarSenhaGerada() {
    alert("Senha copiada com sucesso!") 
    setTimeout(function() { 
        navigator.clipboard.writeText(copiarSenha)
    }, 100);
}

