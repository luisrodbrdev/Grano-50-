const API_URL = "https://script.google.com/macros/s/AKfycbyUNzqWhbymLGcaOvaVwK5iA-ppysc28RLBS8x2l440PtyxequXT5jY2Dg20Lj9hPCF/exec";

function cargarMenu() {
    const script = document.createElement('script');
    script.src = `${API_URL}?callback=procesarDatosMenu`;
    
    // Manejo de errores por si falla la red
    script.onerror = () => {
        console.error("Error al cargar el menú desde Apps Script.");
        document.querySelectorAll('.menu-products').forEach(cont => {
            cont.innerHTML = "<p class='item-description'>Error al cargar el menú. Intenta refrescar.</p>";
        });
    };

    document.body.appendChild(script);
}

function procesarDatosMenu(productos) {
    const conCafe = document.getElementById('contenedor-cafe');
    const conPan = document.getElementById('contenedor-panaderia');
    const conBebidas = document.getElementById('contenedor-bebidas');

    if (!conCafe || !conPan || !conBebidas) return;

    const headerSizesHtml = `
        <div class="size-header-row">
            <span class="size-label">CH</span>
            <span class="size-label">M</span>
            <span class="size-label">G</span>
        </div>
    `;

    // Acumuladores de HTML en memoria
    let htmlCafe = "";
    let htmlPan = "";
    let htmlBebidas = "";

    let headerCafePintado = false;
    let headerBebidasPintado = false;

    // Procesar datos en un solo ciclo rápido
    productos.forEach(producto => {
        const pChico = producto.chico ? `$${producto.chico}` : "";
        const pMediano = producto.mediano ? `$${producto.mediano}` : "";
        const pGrande = producto.grande ? `$${producto.grande}` : "";

        const preciosHtml = `
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
                <p class="item-description">${producto.descripcion || ''}</p>
            </div>
        `;

        const cat = (producto.categoria || "").toLowerCase().trim();

        if (cat === 'cafe' || cat === 'café') {
            if (!headerCafePintado) {
                htmlCafe += headerSizesHtml;
                headerCafePintado = true;
            }
            htmlCafe += itemHtml;
        } else if (cat === 'panaderia' || cat === 'panadería') {
            htmlPan += itemHtml;
        } else if (cat === 'bebidas' || cat === 'bebida') {
            if (!headerBebidasPintado) {
                htmlBebidas += headerSizesHtml;
                headerBebidasPintado = true;
            }
            htmlBebidas += itemHtml;
        }
    });

    // Inyección única al DOM (Instantánea)
    conCafe.innerHTML = htmlCafe;
    conPan.innerHTML = htmlPan;
    conBebidas.innerHTML = htmlBebidas;

    // Limpieza de etiquetas de script residuales
    const scripts = document.querySelectorAll(`script[src*="${API_URL}"]`);
    scripts.forEach(s => s.remove());
}

// Inicialización rápida al cargar el DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarMenu);
} else {
    cargarMenu();
}