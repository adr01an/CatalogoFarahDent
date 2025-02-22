// Obtén el id del producto desde la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id'); // Obtiene el valor del parámetro 'id'

if (productId) {
    console.log('ID del producto:', productId);
    // Ahora puedes usar este id para buscar el producto en el JSON
} else {
    console.error('No se encontró un ID de producto en la URL.');
}



document.addEventListener('DOMContentLoaded', function () {
    // Obtén el id del producto desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        console.error('No se encontró un ID de producto en la URL.');
        return;
    }

    // Carga el archivo JSON
    fetch('/PaginaAdris/json/buscado.json')
        .then(response => response.json())
        .then(data => {
            // Busca el producto con el id correspondiente
            const producto = data.find(item => item.id == productId);

            if (producto) {
                // Muestra los detalles del producto en la página
                mostrarDetallesProducto(producto);
            } else {
                console.error('Producto no encontrado.');
            }
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});

function mostrarDetallesProducto(producto) {
    // Selecciona el contenedor donde mostrarás los detalles del producto
    const detallesContainer = document.getElementById('detallesProducto');

    // Crea el contenido HTML para mostrar los detalles del producto
    detallesContainer.innerHTML = `
        <img class="w-full max-w-[400px] h-auto object-cover" src="${producto.imagen}" alt="${producto.nombre}">
        <h1 class="text-2xl font-bold mt-4">${producto.nombre}</h1>
        <p class="text-gray-700 mt-2">${producto.descripcion}</p>
        <p class="text-lg font-semibold mt-4">Precio: $${producto.precio}</p>
        
    `;
}

// MOSTRAT NABVAR
document.addEventListener('DOMContentLoaded', function () {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el navbar:', error));
});