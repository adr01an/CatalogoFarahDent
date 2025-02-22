document.addEventListener('DOMContentLoaded', function() {
    let currentCategory = null; // Controlador de estado
    let productsData = null; // Almacenar datos del JSON

    // Cargar datos una sola vez
    fetch('/PaginaAdris/json/productos.json')
        .then(response => response.json())
        .then(data => {
            productsData = data.producto;
            initApp();
        })
        .catch(error => console.error('Error al cargar los productos:', error));

    function initApp() {
        const urlParams = new URLSearchParams(window.location.search);
        const parametro = urlParams.get('param');
        
        // Configurar event listeners una sola vez
        setupCategoryListeners();

        // Lógica inicial
        if (parametro) {
            showParam(parametro);
        }
         if(parametro=="all") {
            showPAll();
        }
    }

    function setupCategoryListeners() {
        const selectusuDiv = document.getElementById('selectusu');
        const pElements = selectusuDiv.querySelectorAll('p');

        const pElementsdos = selectusuDiv.querySelector('p');
        let lastSelectedP = null; // Almacena el último <p> seleccionado

        var show = false;
    
        pElements.forEach(p => {
            p.addEventListener('click', () => {
                const category = p.getAttribute('data-value');
                currentCategory = category;
                showParam(category);

                // aqui empieza
                show=true;
                var category2 = p.getAttribute('id');
                // console.info(category2);

                var selectid =document.getElementById(category2);
                console.log(selectid);

                // Quitar la clase al <p> anteriormente seleccionado
                if (lastSelectedP && lastSelectedP !== p) {
                    lastSelectedP.classList.remove('clase-activa'); // Reemplaza con tu clase real
                    lastSelectedP.innerHTML = lastSelectedP.innerHTML.replace(/<div.*<\/div>/, ""); // Elimina el div si existe
                }

                // Asignar la clase al nuevo <p>
                    p.classList.add('clase-activa'); // Reemplaza con tu clase real
                    lastSelectedP = p; // Guardar la referencia del <p> actual

                var innep= document.createElement('div');
                var innep2=document.createElement('h1');  
                // let clss = false;

                // Crear y agregar los elementos internos
                    var innep = document.createElement('div');
                    // innep.className ='shadow-lg shadow-cyan-500/50';
                    var innep2 = document.createElement('h1');

                    // selectid.className = 'h-7  shadow-md font-semibold rounded-xl px-3 inset-shadow-sm inset-shadow-slate-500 ';

                    innep.className = 'flex ';
                    innep2.className = 'h-3 w-3 shrink-0 grow-0 items-center justify-center rounded-full  bg-cyan-500 ml-18 -mt-4 md:ml-17 shadow-lg shadow-cyan-600/50  ring-1 ring-cyan-600 inset-shadow-sm inset-shadow-indigo-500 ';

                    selectid.appendChild(innep);
                    innep.appendChild(innep2);

                // if(show==true){
                //     innep.className='flex ';
                //     innep2.className= ' h-3 w-3 shrink-0 grow-0 items-center justify-center rounded-full bg-rose-400  ml-18 -mt-4 md:ml-17  ';
                //     selectid.appendChild(innep); 
                //     innep.appendChild(innep2);   
                //     var show = false;
   
   

                // }
               
                
                    
                // aqui termina
            });
        });
      
    }

    function showParam(category) {
        if (!productsData) return;

        const filteredProducts = productsData.filter(item => item.categoria === category);
        renderProducts(filteredProducts);
        updateUrlParam(category);
    }

    function showPAll() {
        if (!productsData) return;
        renderProducts(productsData);
        updateUrlParam(null);
    }

    function renderProducts(products) {
        const productosContainer = document.getElementById('verProductos');
        productosContainer.innerHTML = '';

        products.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.className = 'col-span-1 shadow-xl';
            productoElement.innerHTML = `
                <div class="h-full md:max-h-[500px] md:max-w-[500px]">
                    <img class="h-[281px]" src="${producto.imagen}">
                    <div class="ml-2">
                        <h1 class="text-md font-semibold py-1">${producto.nombre}</h1>
                        <p class="text-base text-sm">${producto.descripcion}</p>                      
                        ${producto.color ? `<h1 class="flex items-center ">Color:
                        <p class="h-3 w-6 ml-3 shrink-0 grow-0 items-center justify-center rounded-xl ${producto.color}"></p>
                        </h1>
                        `
                         : '<h1></h1>'}

                         ${producto.size ? `<h1 class="flex items-center ">Tamaño:
                        <p class=" capitalize ml-2" > <strong>${producto.size.toLowerCase()}</strong> </p>
                        </h1>
                        `
                         : '<h1></h1>'}   
                         
                         ${producto.pesogrl ? `<h1 class="flex items-center ">Gr/Kg:
                        <p class=" ml-2" > <strong>${producto.pesogrl}</strong> </p>
                        </h1>
                        `
                         : '<h1></h1>'}
                         
                         ${producto.cantidadPaquete ? `<h1 class="flex items-center ">Cantidad:
                        <p class=" ml-2" > <strong>${producto.cantidadPaquete}</strong></p>
                        </h1>
                        `
                         : '<h1></h1>'} 
                        
                        <p><strong>$${producto.precio}</strong></p>
                    </div>
                </div>
            `;

            productoElement.addEventListener('click', () => {
                window.location.href = `productoDetalle.html?id=${producto.id}`;
            });

            productosContainer.appendChild(productoElement);
        });
    }

    function updateUrlParam(param) {
        const url = new URL(window.location);
        if (param) {
            url.searchParams.set('param', param);
        } else {
            url.searchParams.delete('param');
        }
        // window.history.replaceState({}, '', url);
    }
});