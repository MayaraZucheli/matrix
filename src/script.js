function mostrarTexto(id) {
    var texto = document.getElementById(id);

    texto.classList.toggle('visible');

    event.currentTarget.style.cursor = 'pointer';
}