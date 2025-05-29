document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('section');
    const noticiasContainer = document.getElementById('noticias-container');

    // Datos de noticias (simulados)
    const noticias = [
        {
            titulo: 'Impactante Hallazgo de Microplásticos en Playa Local',
            descripcion: 'Un reciente estudio revela niveles alarmantes de microplásticos en la arena de nuestra playa principal, afectando la vida marina y la calidad del ecosistema.',
            fecha: '2025-05-28'
        },
        {
            titulo: 'Rescate de Tortugas Marinas Afectadas por Contaminación',
            descripcion: 'Voluntarios lograron rescatar varias tortugas marinas que presentaban problemas de salud debido a la ingesta de desechos plásticos. Se hace un llamado a la conciencia ciudadana.',
            fecha: '2025-05-27'
        },
        {
            titulo: 'Cierre Temporal de Playa por Marea Roja',
            descripcion: 'Las autoridades han decretado el cierre preventivo de una popular playa debido a la presencia de una marea roja, que representa un riesgo para la salud de los bañistas.',
            fecha: '2025-05-26'
        },
        // Puedes agregar más noticias aquí
    ];

    // Función para mostrar las noticias en el HTML
    function mostrarNoticias() {
        noticias.forEach(noticia => {
            const noticiaDiv = document.createElement('div');
            noticiaDiv.classList.add('noticia');
            noticiaDiv.innerHTML = `
                <h4><span class="vintage-text">${noticia.titulo}</span></h4>
                <p>${noticia.descripcion}</p>
                <p class="fecha">${noticia.fecha}</p>
            `;
            noticiasContainer.appendChild(noticiaDiv);
        });
    }

    // Mostrar las noticias al cargar la página
    mostrarNoticias();

    // Función para manejar el cambio de sección
    function cambiarSeccion(event) {
        const targetSectionId = event.target.getAttribute('data-section');

        navButtons.forEach(button => {
            button.classList.remove('active');
        });
        event.target.classList.add('active');

        sections.forEach(section => {
            section.classList.remove('active-section');
        });
        document.getElementById(targetSectionId).classList.add('active-section');
    }

    // Agregar event listeners a los botones de navegación
    navButtons.forEach(button => {
        button.addEventListener('click', cambiarSeccion);
    });
});
