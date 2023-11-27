if (sessionStorage.getItem('senha')){
    document.getElementById('formulario').style.display = 'none';
} else {
    document.getElementById('formulario').style.display = 'block';
}


const verificaSenha = () => {
    const entrada = document.getElementById("entrada").value;
    const senha = 'e8d95a51f3af4a3b134bf6bb680a213a';

    if (hex_md5(entrada) === senha){

        localStorage.setItem('senhaUsuario', entrada);
        window.location = '/';
        window.location.href = 'atletas.html';

    } else {
        alert('Senha incorreta!');
    }
}

function sair(){
    localStorage.removeItem("senhaUsuario");
    window.location.href = 'index.html';
}
