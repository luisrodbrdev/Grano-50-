const API_URL = "https://script.google.com/macros/s/AKfycbyUNzqWhbymLGcaOvaVwK5iA-ppysc28RLBS8x2l440PtyxequXT5jY2Dg20Lj9hPCF/exec";

// 1. Carga inicial: Si hay datos locales, los pinta DE INMEDIATO
function cargarMenu() {
    const datosGuardados = localStorage.getItem('menu_grano50');
    if (datosGuardados) {
        try {
            renderizarMenuUI(JSON.parse(datosGuardados));
        } catch (e) {
            console.error("Error al leer caché local", e);
        }
    }

    // Petición a Apps Script para obtener/actualizar datos frescos en segundo plano
    const script = document.createElement('script');
    script.src = `${API_URL}?callback=procesarDatosMenu`;
    
    script.onerror = () => {
        console.error("Error al conectar con la API.");
        if (!datosGuardados) {
            document.querySelectorAll('.menu-products').forEach(cont => {
                cont.innerHTML = "<p class='item-description'>Error al cargar el menú. Intenta refrescar.</p>";
            });
        }
    };

    document.body.appendChild(script);
}

// 2. Callback de la API: Guarda los nuevos datos y actualiza la vista
function procesarDatosMenu(productos) {
    try {
        localStorage.setItem('menu_grano50', JSON.stringify(productos));
    } catch(e) {
        console.warn("No se pudo guardar en localStorage", e);
    }

    renderizarMenuUI(productos);

    // Limpieza del tag de script inyectado
    const scripts = document.querySelectorAll(`script[src*="${API_URL}"]`);
    scripts.forEach(s => s.remove());
}

// 3. Renderizado eficiente del HTML en memoria
function renderizarMenuUI(productos) {
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

    let htmlCafe = "";
    let htmlPan = "";
    let htmlBebidas = "";

    let headerCafePintado = false;
    let headerBebidasPintado = false;

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

    conCafe.innerHTML = htmlCafe;
    conPan.innerHTML = htmlPan;
    conBebidas.innerHTML = htmlBebidas;
}

// Evento de inicio rápido
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarMenu);
} else {
    cargarMenu();
}