const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<header class="bg-dark">
    <div class="container">
        <div class="d-flex align-items-center py-3">
            <nav class="navbar navbar-expand-lg navbar-dark w-100 justify-content-between ">
                <div>
                    <a href="../index.html">
                        <img class="logo" src="/static.img/logo.jpg" alt="logo">
                    </a>
                </div>
                <div class="navbar-nav">
                    <a class="nav-link" href="../index.html">Inicio</a>
                    <a class="nav-link" href="/templates/destinosNacionales.html">Destinos nacionales</a>
                    <a class="nav-link" href="/templates/destinosInternacionales.html">Destinos internacionales</a>
                    <a class="nav-link" href="/templates/form.html">Contacto</a>
                </div>
                <div id="toggleStyle">
                    <i id="sunIcon" class="fa-solid fa-sun"></i>
                    <i id="moonIcon" class="fa-solid fa-moon"></i>
                </div>                
            </nav>
        </div>
    </div>
</header>
`;

footer.innerHTML = `
<footer class="bg-dark text-light py-4">
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <div class="social-icons">
                <a href="http://facebook.com" class="text-primary me-3"><i class="bi bi-facebook"></i></a>
                <a href="https://x.com/" class="text-info me-3"><i class="bi bi-twitter"></i></a>
                <a href="https://www.instagram.com/" style="color: #c918ff;"><i class="bi bi-instagram"></i></a>
            </div>
            <div class="text-center">
                <p class="mb-0">Grupin S.A. - Todos los derechos reservados.</p>
            </div>
        </div>
    </div>
</footer>
`;