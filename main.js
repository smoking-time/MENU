// Productos de ejemplo
const productos = [
    {
        nombre: "Gorra Negra",
        descripcion: "Gorra negra ajustable.",
        precio: 50,
        imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&q=80",
    },
    {
        nombre: "Bolso Deportivo",
        descripcion: "Bolso para deporte.",
        precio: 150,
        imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&q=80",
    },
    {
        nombre: "Camiseta Blanca",
        descripcion: "Camiseta de algodón blanca.",
        precio: 100,
        imagen: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=256&q=80",
    },
    {
        nombre: "Vestido Azul",
        descripcion: "Vestido azul marino.",
        precio: 350,
        imagen: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=facearea&w=256&q=80",
    }
];

// Renderizar productos
const grid = document.getElementById('productos-grid');
productos.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'tarjeta-producto';
    card.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>${prod.descripcion}</p>
        <p><strong>$${prod.precio}</strong></p>
        <button>Añadir</button>
        <button>Información</button>
    `;
    grid.appendChild(card);
});