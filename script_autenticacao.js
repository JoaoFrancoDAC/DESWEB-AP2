document.addEventListener('DOMContentLoaded', function() {
    const valorEsperado = 'senha';
    const valorNoStorage = localStorage.getItem('senhaUsuario');

    if (valorNoStorage !== valorEsperado) {
        window.location.href = 'index.html';
    }
});