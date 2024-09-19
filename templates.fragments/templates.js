const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `

<nav class="navbar bg-dark border-bottom border-body p-3" data-bs-theme="dark">
<a href="index.html"><img class="logo" src="/static.img/logo.jpg" alt="logo"></a>
<div class="nav">
<a class="nav-link m-2 p-2" style="color: #ed8275;" href="/templates/index.html">
<button class="btn btn-outline me-2" type="button">Inicio</button>
</a>
<a class="nav-link m-2 p-2" style="color: #ed8275;" href="/templates/productos.html">
<button class="btn btn-outline me-2" type="button">Productos</button>
</a>
<a class="nav-link m-2 p-2" style="color: #ed8275;" href="/templates/form.html">
<button class="btn btn-outline me-2" type="button">Contacto</button>
</a>
</div>
</nav>
`;