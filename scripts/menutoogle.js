function setupNavbar() {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    } else {
        console.error("No se encontraron los elementos del navbar.");
    }

    const irindex = document.getElementById("irmenuid");
    const irHome=   document.getElementById("irHomeid");

    const irHomeiddos=document.getElementById("irHomeiddos");

    const irallProductosid=document.getElementById("irallProductosid");

    const irallProductosiddos = document.getElementById("irallProductosiddos")

    if(irindex){
        irindex.addEventListener("click",()=>{
            window.location.href = "index.html";
        })

    }else{
        console.error("No sirve el clik a index.");
    }

    if(irHome){
        irHome.addEventListener("click",()=>{
            window.location.href="index.html";

        })
    }else{
        console.error("no sirve el click irHOME")
    }

    if(irHomeiddos){
        irHomeiddos.addEventListener("click",()=>{
            window.location.href="index.html";
        })
    }else{
        console.error("no sirve el click irHOMEmovil")
    }

    if(irallProductosid){
        irallProductosid.addEventListener("click",()=>{
            window.location.href="allProducts.html?param=all";
        })
    }else{
        console.error("no sirve el click ira productos")
    }

    if(irallProductosiddos){
        irallProductosiddos.addEventListener("click",()=>{
            window.location.href="allProducts.html?param=all"
        })
    }

    
}

// Exporta la función para que pueda ser usada en otros archivos
export default setupNavbar;