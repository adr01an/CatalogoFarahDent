document.addEventListener('DOMContentLoaded', function() {

    var urlParams = new URLSearchParams(window.location.search);
    var parametro = urlParams.get('param');
    console.log(parametro);
    var show= true;

    
        if(show){
            showPAll();

        }else{
            

            showParam();
        }





    


 });

function showParam(){

    show=!show;
    // parametro=!parametro
    const selectusuDiv = document.getElementById('selectusu');
    const pElements = selectusuDiv.querySelectorAll('p');

    pElements.forEach(p => {
        p.addEventListener('click', () => {

            const value = p.getAttribute('data-value');
            console.log(value);


            fetch('/PaginaAdris/json/productos.json')
            .then(response => response.json())
            .then(data => {

      
            const productosContainer = document.getElementById('verProductos');
            productosContainer.innerHTML='';

            producto = data.producto.filter(item => item.categoria == value);
        
                     producto.forEach(producto => {
                
                            const productoElement =  document.createElement('div');
                            
                            productoElement.className = 'col-span-1  shadow-xl';         
                            productoElement.innerHTML = `
                                    <div class="h-full md:max-h-[500px] md:max-w-[500px] " >
                                            <img class="" src="${producto.imagen}">
                                            <div class="ml-2 ">
                                                <h1 class="text-md font-semibold py-1 ">${producto.nombre}</h1>
                                                <p class="text-base text-sm">${producto.descripcion}</p>
                                                <p class="h-3 w-3 shrink-0 grow-0 items-center justify-center rounded-full ${producto.color} "></p>
                                                <p><strong>$${producto.precio}</strong></p>
                                            </div>
                                            
                                        </div>
                        `;
                            productosContainer.appendChild( productoElement);

                            productoElement.addEventListener('click', () => {
                                window.location.href = `producto.html?id=${producto.id}`; // Asume que cada producto tiene un ID único
                            });
                        });



                    })
                    .catch(error => console.error('Error al cargar los productos:', error));




           
        });
    });


    


}


function showPAll(){
 
        

    fetch('/PaginaAdris/json/productos.json')
    .then(response => response.json())
    .then(data => {
        const productosContainer = document.getElementById('verProductos');
        productosContainer.innerHTML='';


        data.producto.forEach(producto => {
            
            const productoElement =  document.createElement('div');
            
            productoElement.className = 'col-span-1  shadow-xl';         
            productoElement.innerHTML = `
                    <div class="h-full md:max-h-[500px] md:max-w-[500px] " >
                            <img class="" src="${producto.imagen}">
                            <div class="ml-2 ">
                                <h1 class="text-md font-semibold py-1 ">${producto.nombre}</h1>
                                <p class="text-base text-sm">${producto.descripcion}</p>
                                <p class="h-3 w-3 shrink-0 grow-0 items-center justify-center rounded-full ${producto.color} "></p>
                                <p><strong>$${producto.precio}</strong></p>
                            </div>
                            
                        </div>
        `;
            productosContainer.appendChild( productoElement);

            productoElement.addEventListener('click', () => {
                window.location.href = `producto.html?id=${producto.id}`; // Asume que cada producto tiene un ID único
            });
        });



    })
    .catch(error => console.error('Error al cargar los productos:', error));

}