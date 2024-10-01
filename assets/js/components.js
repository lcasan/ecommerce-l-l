class Product {
    constructor({code, name, color, size, price}) {
        this.code = code; // gtin-8
        this.name = name;
        this.color = color;        
        this.price = price;
        this.size = size;
    }

    render(){
        const productHTML = document.createElement('div');
        
        productHTML.innerHTML = `
            <div class="product__banner">
                <!-- Product image -->
                <a href="details.html" class="product__images">
                    <img src="assets/img/products/P${this.code}.png" alt="${this.name}" class="product__img default" />
                </a>
            </div>
        
            <!-- Contenido del producto -->
            <div class="product__content">
            <span class="product__category">${this.size}</span>
            <a href="details.html">
                <h3 class="product__title">${this.name}</h3>
            </a>

            <!-- Price -->
            <div class="product__price flex">
                <span class="new__price">$${this.price}</span>
            </div>

            <!-- Add to car -->
            <a href="#" class="action__btn cart__btn" aria-label="Añadir al carrito" data-product-id="${this.code}">
                <i class="fi fi-rs-shopping-bag-add"></i>
            </a>
        </div>`;

        return productHTML
    }
}

import { plist } from './list';

const app = document.querySelector('.products__container');
if (app) { // Verificar si el contenedor existe
    plist.forEach(element => {
        const product = new Product({
            code: element[0],
            name: element[1],
            color: element[2],
            size: element[3],
            price: element[4]
        });

        // Asegúrate de que product.render() retorne un elemento HTML válido
        const productElement = product.render();
        if (productElement instanceof HTMLElement) { // Verifica que sea un nodo HTML
            app.appendChild(productElement);
        } else {
            console.error("El método render() debe devolver un elemento HTML válido.");
        }
    });
} else {
    console.error("El contenedor '.products__container' no existe en el DOM.");
}