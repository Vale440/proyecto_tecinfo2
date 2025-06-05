// somos.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('El archivo somos.js se ha cargado correctamente y la página está lista.');

    // Ejemplo de interactividad básica con el botón (opcional)
    const canvaButton = document.querySelector('.canva-button');
    if (canvaButton) {
        canvaButton.addEventListener('click', () => {
            console.log('Botón de Canva clickeado. Redirigiendo...');
            // Si quisieras hacer algo antes de la redirección, como un analytics event
            // La redirección real la maneja el 'href' del enlace.
        });
    }
});
