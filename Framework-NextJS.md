# Framework-NextJS

Next.js es un framework basado en React que permite crear aplicaciones web y sitios estáticos con un enfoque en el rendimiento, la simplicidad y la flexibilidad. Proporciona una experiencia de desarrollo optimizada con características como renderizado en el servidor (SSR), generación de sitios estáticos (SSG), y una arquitectura que soporta aplicaciones híbridas.
Es flexible (podes combinar SSR,SSG Y CSR), manejo de rutas dinámicas, anidadas y estáticas, SEO amigable y comunidad activa entre otras caracteristivas.

## Motivación y justificación
Me motivo principalmente en manejo que tiene en el SEO, en esta web lo usaria con el formato SSG para crear la página de forma estática con el compilador que trae y alojarla en un hosting compartido, por ejemplo. Además, ofrece la ventaja de contar con un buen SEO y una optimización automática de imágenes. Es un framework bien robusto y completo. Utilizado para web con mucha demanda y es escalable.

## Nivel de dificultad de adaptación
Al estar basado en React te resultara facil aprenderlo si conoces React.JS, moredado si solo sabes Javascrpt y Desafiante para principiantes en desarrollo web.

## Ejemplo de código - "Antes y después"
Una lista de productos realizada antes con JavaScript y despues con Next.Js.

### Antes JavaScript puro
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Lista de Productos</title>
    </head>
    <body>
      <h1>Lista de Productos</h1>
      <ul id="productList"></ul>

      <script>
        const products = ['Producto 1', 'Producto 2', 'Producto 3'];
        const productList = document.getElementById('productList');

        products.forEach((product) => {
          const listItem = document.createElement('li');
          listItem.textContent = product;
          productList.appendChild(listItem);
        });
      </script>
    </body>
    </html>

### Después
Se crea un proyecto 

    npx create-next-app@latest productos-next
    cd productos-next

codigo en un archivo .js

    export default function Home() {
      const products = ['Producto 1', 'Producto 2', 'Producto 3'];

      return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <h1>Lista de Productos</h1>
          <ul>
            {products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>
      );
    }
