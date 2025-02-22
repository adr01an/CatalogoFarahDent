// document.addEventListener('DOMContentLoaded', function() {
//     fetch('productos.json')
//         .then(response => response.json())
//         .then(data => {
//             const productosContainer = document.getElementById('productos-container');
//             data.forEach(producto => {
//                 const productoElement = document.createElement('div');
//                 productoElement.classList.add('producto');
//                 productoElement.innerHTML = `
//                     <img src="${producto.imagen}" alt="${producto.nombre}">
//                     <h2>${producto.nombre}</h2>
//                     <p><strong>Precio:</strong> $${producto.precio}</p>
//                     <p><strong>Stock:</strong> ${producto.stock}</p>
//                     <p><strong>Categoría:</strong> ${producto.categoria}</p>
//                 `;
//                 productosContainer.appendChild(productoElement);
//             });
//         })
//         .catch(error => console.error('Error al cargar los productos:', error));
// });


// <div id="productoDiv" class="max-h-[400px] max-w-[400px] md:max-h-[700px] md:max-w-[700px] shadow-lg shadow-cyan-500/50 p-4 ">
//                     <img class="w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-cover block text-center"  src="./img/guantes.jpg" alt="">
//                     <h1 class="text-black text-left">Guantes</h1>
//                     <p class="text-black">Blue Latex Exam Gloves</p>
//                     <a class="text-black">$399.00</a>
//                 </div>

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://github.com/adr01an/CatalogoFarahDent/edit/main/json/buscado.json')
        .then(response => response.json())
        .then(data => {
            const productosContainer = document.getElementById('productoDiv');
            productosContainer.innerHTML='';

            data.forEach(producto => {
                
                const productoElement =  document.createElement('div');
                
                productoElement.className = 'max-h-[400px] max-w-[400px] md:max-h-[700px] md:max-w-[700px] shadow-sm shadow-cyan-500/50 p-4';
              
                productoElement.innerHTML = `
                <img class="w-[200px] h-[200px] md:w-[350px] md:h-[350px] object-cover block text-center" src="${producto.imagen}" alt="${producto.nombre}">
                <h1 class="text-black text-left">${producto.nombre}</h1>
                <p class="text-black">${producto.descripcion}</p>
                <p><strong>$ ${producto.precio}</strong> </p>
            `;
                productosContainer.appendChild( productoElement);

                productoElement.addEventListener('click', () => {
                    window.location.href = `productoDetalle.html?id=${producto.id}`; // Asume que cada producto tiene un ID único
                });
            });
        })
        .catch(error => console.error('Error al cargar los productos:', error));
});

