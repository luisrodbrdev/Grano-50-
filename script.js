const API_URL = "https://script.google.com/macros/s/AKfycbyUNzqWhbymLGcaOvaVwK5iA-ppysc28RLBS8x2l440PtyxequXT5jY2Dg20Lj9hPCF/exec";

function cargarMenu() {
    console.log("Conectando de forma directa mediante JSONP...");
    const script = document.createElement('script');
    script.src = `${API_URL}?callback=procesarDatosMenu`;
    document.body.appendChild(script);
}

function procesarDatosMenu(productos) {
    console.log("¡Productos recibidos con éxito!", productos);
    
    const conCafe = document.getElementById('contenedor-cafe');
    const conPan = document.getElementById('contenedor-panaderia');
    const conBebidas = document.getElementById('contenedor-bebidas');

    conCafe.innerHTML = "";
    conPan.innerHTML = "";
    conBebidas.innerHTML = "";

    const headerSizesHtml = `
        <div class="size-header-row">
            <span class="size-label">CH</span>
            <span class="size-label">M</span>
            <span class="size-label">G</span>
        </div>
    `;

    let headerCafePintado = false;
    let headerBebidasPintado = false;

    productos.forEach(producto => {
        let preciosHtml = "";
        
        const pChico = producto.chico ? `$${producto.chico}` : "";
        const pMediano = producto.mediano ? `$${producto.mediano}` : "";
        const pGrande = producto.grande ? `$${producto.grande}` : "";

        preciosHtml = `
            <div class="item-prices">
                <span class="price-size">${pChico}</span>
                <span class="price-size">${pMediano}</span>
                <span class="price-size">${pGrande}</span>
            </div>
        `;

        const itemHtml = `
            <div class="menu-item">
                <div class="menu-item-header">
                    <span class="item-name">${producto.nombre}</span>
                    <div class="item-line"></div>
                    ${preciosHtml}
                </div>
                <p class="item-description">${producto.descripcion}</p>
            </div>
        `;

        const cat = producto.categoria.toLowerCase().trim();

        if (cat === 'cafe' || cat === 'café') {
            if (!headerCafePintado) {
                conCafe.innerHTML += headerSizesHtml;
                headerCafePintado = true;
            }
            conCafe.innerHTML += itemHtml;
        } else if (cat === 'panaderia' || cat === 'panadería') {
            conPan.innerHTML += itemHtml;
        } else if (cat === 'bebidas' || cat === 'bebida') {
            if (!headerBebidasPintado) {
                conBebidas.innerHTML += headerSizesHtml;
                headerBebidasPintado = true;
            }
            conBebidas.innerHTML += itemHtml;
        }
    });

    // Limpieza de la etiqueta provisional
    const scripts = document.querySelectorAll(`script[src^="${API_URL}"]`);
    scripts.forEach(s => s.remove());
}

window.addEventListener('DOMContentLoaded', cargarMenu);