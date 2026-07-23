@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Montserrat:wght@300;400;600&display=swap');

:root {
    --bg-dark: #0b0b0b;
    --card-dark: #141414;
    --gold-primary: #cba153;
    --gold-light: #e9c47e;
    --text-white: #f5f5f5;
    --text-muted: #a0a0a0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    width: 100%;
    overflow-x: hidden; /* Evita el scroll horizontal en móviles */
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-white);
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    line-height: 1.6;
}

h1, h2, h3 {
    font-family: 'Cinzel', serif;
    color: var(--gold-primary);
    letter-spacing: 2px;
}

a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease, background-color 0.3s ease;
}

header {
    width: 100%;
    background-color: rgba(11, 11, 11, 0.95);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    border-bottom: 1px solid #1a1a1a;
}

.navegation {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 20px;
    width: 100%;
}

.logo img {
    height: 45px;
    width: auto;
    object-fit: contain;
}

.links-nav {
    display: flex;
    list-style: none;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

.links-nav a {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.links-nav a:hover {
    color: var(--gold-light);
}

.hero-section {
    min-height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 80px 20px 20px;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.hero-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(30%);
}

.hero-container h1 {
    font-size: clamp(1.8rem, 5vw, 4rem);
    margin-bottom: 25px;
    color: #fff;
    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
}

.btn-ver-menu {
    display: inline-block;
    padding: 12px 35px;
    border: 2px solid var(--gold-primary);
    color: var(--gold-primary);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 13px;
    border-radius: 4px;
}

.btn-ver-menu:hover {
    background-color: var(--gold-primary);
    color: var(--bg-dark);
}

.menu-section {
    padding: 100px 15px 80px;
    max-width: 1100px; 
    margin: 0 auto;
    width: 100%;
    position: relative;
}

.menu-section h2 {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    text-align: center;
    margin-bottom: 40px;
    text-transform: uppercase;
}

.menu-section h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background-color: var(--gold-primary);
    margin: 15px auto 0;
}

.menu-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    align-items: center; 
    width: 100%;
}

.menu-category-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    justify-self: center; 
    margin-bottom: 20px;
}

.menu-section h3 {
    font-size: clamp(1.3rem, 3vw, 1.8rem);
    color: var(--gold-primary);
    margin-bottom: 20px;
    border-bottom: 1px solid #1a1a1a;
    padding-bottom: 10px;
}

.menu-products {
    display: grid;
    grid-template-columns: 1fr; 
    gap: 15px;
    width: 100%;
}

.menu-photo-block {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 250px; 
    width: 100%;
    border-radius: 6px;
    border: 1px solid #1f1f1f;
    justify-self: center; 
    margin-bottom: 20px;
}

.menu-photo-block img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    filter: brightness(85%) grayscale(15%); 
    transition: transform 0.5s ease;
}

.menu-photo-block img:hover {
    transform: scale(1.03); 
}

.menu-item {
    background-color: var(--card-dark);
    padding: 15px;
    border-radius: 6px;
    border: 1px solid #1f1f1f;
    width: 100%;
}

.menu-item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 6px;
    width: 100%;
    gap: 10px;
}

.item-name {
    font-family: 'Cinzel', serif;
    font-size: 1rem;
    color: #fff;
    /* Removido white-space: nowrap para evitar desbordamiento */
}

.item-line {
    flex-grow: 1;
    border-bottom: 1px dotted rgba(203, 161, 83, 0.4);
    position: relative;
    top: -4px;
}

.item-prices {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
}

.price-size {
    color: var(--gold-light);
    font-weight: 600;
    min-width: 35px;
    text-align: center;
    font-size: 0.95rem;
}

.price-single {
    color: var(--gold-light);
    font-weight: 600;
}

.size-header-row {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    margin-bottom: 10px;
    margin-top: 5px;
}

.size-label {
    font-size: 0.75rem;
    color: var(--gold-primary);
    font-weight: 700;
    min-width: 35px;
    text-align: center;
    text-transform: uppercase;
    opacity: 0.8;
    letter-spacing: 1px;
}

.item-description {
    font-size: 12px;
    color: var(--text-muted);
}

.aboutUs-section {
    padding: 80px 20px;
    background-color: var(--card-dark);
    position: relative;
    width: 100%;
}

/* Transición suave entre secciones */
.aboutUs-section::before {
    content: '';
    position: absolute;
    top: -80px;
    left: 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(to bottom, transparent, var(--card-dark));
    pointer-events: none;
}

.aboutUs-container {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    align-items: center;
}

.aboutUs-img img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #2a2a2a;
}

.aboutUs-text h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 20px;
    text-align: left;
}

.aboutUs-text p {
    color: var(--text-muted);
    font-size: 14px;
}

.contact-section {
    padding: 60px 20px;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
}

.contact-section h2 {
    text-align: center;
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 30px;
}

.grid-horarios {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    align-items: center;
}

.horarios {
    background-color: var(--card-dark);
    padding: 25px;
    border-radius: 8px;
    border: 1px solid #1f1f1f;
    text-align: center;
}

.horarios h3 {
    margin-bottom: 15px;
    font-size: 1.3rem;
}

.horarios p {
    margin-bottom: 8px;
    color: var(--text-muted);
    font-size: 14px;
}

.map iframe {
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    width: 100%;
}

footer {
    background-color: #050505;
    padding: 30px 20px;
    text-align: center;
    border-top: 1px solid #111;
    font-size: 13px;
    color: var(--text-muted);
    width: 100%;
}

footer p {
    margin-bottom: 15px;
}

.redes-sociales a {
    margin: 0 10px;
    color: var(--gold-primary);
}

.redes-sociales a:hover {
    color: var(--gold-light);
}

/* Escritorio / Pantallas grandes */
@media (min-width: 850px) {
    .links-nav {
        gap: 30px;
    }

    .links-nav a {
        font-size: 14px;
    }

    .menu-section {
        padding: 120px 20px 100px;
    }

    .menu-container {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 60px;
        row-gap: 60px;
    }

    .menu-category-block {
        max-width: 550px;
        margin-bottom: 0;
    }

    .menu-photo-block {
        height: 480px;
        max-width: 450px;
        margin-bottom: 0;
    }

    .menu-container > div:nth-child(1) { grid-column: 1; grid-row: 1; }
    .menu-container > div:nth-child(2) { grid-column: 2; grid-row: 1; }

    .menu-container > div:nth-child(3) { grid-column: 2; grid-row: 2; }
    .menu-container > div:nth-child(4) { grid-column: 1; grid-row: 2; }

    .menu-container > div:nth-child(5) { grid-column: 1; grid-row: 3; }
    .menu-container > div:nth-child(6) { grid-column: 2; grid-row: 3; }

    .item-prices, .size-header-row {
        gap: 45px;
    }

    .price-size, .size-label {
        width: 42px;
    }

    .aboutUs-container {
        grid-template-columns: repeat(2, 1fr);
    }

    .aboutUs-img img {
        height: 350px;
    }

    .grid-horarios {
        grid-template-columns: 1fr 2fr;
    }
}
