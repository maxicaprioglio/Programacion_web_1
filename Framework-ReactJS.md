# Framework-ReactJS

React.js es una biblioteca de JavaScript de código abierto desarrollada por Meta para crear interfaces de usuario (UI) interactivas y reutilizables. Es ampliamente utilizada en el desarrollo de aplicaciones web modernas debido a su enfoque declarativo y eficiente.

Características principales de React.js
- Enfoque declarativo
- Basado en componentes
- Virtual DOM
- JSX (JavaScript XML)
- Gran ecosistema y comunidad

Ventajas de usar React.js
- Rendimiento mejorado gracias al Virtual DOM.
- Reutilización de componentes, reduciendo el código redundante.
- Compatibilidad con otros frameworks y bibliotecas.
- Flexibilidad: se puede usar para desarrollar aplicaciones web, móviles (React Native), o incluso aplicaciones de escritorio.
Casos de uso comunes
- Single Page Applications (SPA): Aplicaciones que cargan una sola página HTML y actualizan dinámicamente el contenido.
- Aplicaciones interactivas: Tableros, formularios avanzados, o herramientas que requieren actualizaciones en tiempo real.
- Aplicaciones móviles: React Native permite reutilizar lógica de React para crear aplicaciones móviles nativas.

## Motivación y justificación
Me moviliza la capacidad de reutilizar codigo para otros proyectos, que sea de codigo abierto, la escalabilidad que se le puede dar y la mejora en el rendimiento.

## Nivel de dificultad de adaptación
la curva de aprendizaje de React es moderada: fácil para quienes ya tienen experiencia en JavaScript, desarrollo web y bootstrap, pero puede ser desafiante para principiantes por los conceptos de Estados, Props y ciclo de vida del componente.

## Ejemplo de código - "Antes y después"
Una lista de productos realizada antes con JavaScript y despues con React.Js.

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

    npx create-next-app@latest lista-productos
    cd lista-productos

codigo en un archivo .js

    import React from 'react';

    export default function App() {
      const products = ['Producto 1', 'Producto 2', 'Producto 3'];

      return (
        <div>
          <h1>Lista de Productos</h1>
          <ul>
            {products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>
      );
    }
