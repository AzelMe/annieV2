document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    const negociosCards = document.querySelectorAll('.negocio-card');

    const negocios = [
        { nombre: 'Cafetería UT', descripcion: 'Cafetería con productos orgánicos y económica', url: 'cafeteria.html' },
        { nombre: 'Belleza los Olvidados', descripcion: 'Ponte bella o bello con los únicos de Nuevo León', url: 'belleza.html' },
        { nombre: 'Cyber UTSC', descripcion: 'Copias e impresiones al momento', url: 'cyber.html' }
    ];

    function buscarNegocios(busqueda) {
        const resultados = negocios.filter(negocio => 
            negocio.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            negocio.descripcion.toLowerCase().includes(busqueda.toLowerCase())
        );

        mostrarResultados(resultados);
    }

    function mostrarResultados(resultados) {
        searchResults.innerHTML = '';

        if (resultados.length === 0) {
            searchResults.innerHTML = '<p>No se encontraron negocios</p>';
            return;
        }

        const ul = document.createElement('ul');
        ul.style.listStyle = 'none';
        ul.style.padding = '0';

        resultados.forEach(negocio => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="resultado-item">
                    <h4>${negocio.nombre}</h4>
                    <p>${negocio.descripcion}</p>
                    <a href="${negocio.url}" class="btn-visitar">Visitar</a>
                </div>
            `;
            ul.appendChild(li);
        });

        searchResults.appendChild(ul);
    }

    
    searchButton.addEventListener('click', () => {
        buscarNegocios(searchInput.value);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            buscarNegocios(searchInput.value);
        }
    });

    // Limpiar resultados cuando el input está vacío
    searchInput.addEventListener('input', () => {
        if (searchInput.value === '') {
            searchResults.innerHTML = '';
        }
    });
});