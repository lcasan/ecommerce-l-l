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
        productHTML.className = 'product__item';

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

                <!-- Add to cart -->
                <a 
                    href="#" 
                    class="action__btn cart__btn" 
                    aria-label="Añadir al carrito" 
                    data-product-id="${this.code}">
                    <i class="fi fi-rs-shopping-bag-add"></i>
                </a>
            </div>`;

        const addToCartBtn = productHTML.querySelector('.cart__btn');
        addToCartBtn.addEventListener('click', (event) => {
            event.preventDefault();
            
            table.addToCart({
                code: this.code,
                name: this.name,
                color: this.color,
                size: this.size,
                price: this.price
            });
        });

        return productHTML;
    }
}


class Cart {
    constructor() {
        this.products = [];
        this.content = document.createElement('div');
        this.content.className = 'table__container';
    }

    render() {
        let productHTML = this.products.map(product => `
            <tr>
                <td>
                    <img
                        src="./assets/img/products/${product.code}.png"
                        alt="${product.name}"
                        class="table__img"
                    />
                </td>
                <td>
                    <h3 class="table__title">
                        ${product.name} (${product.color}, ${product.size})
                    </h3>
                    <p class="table__description">
                        Descripción del producto.
                    </p>
                </td>
                <td>
                    <span class="table__price">$${product.price}</span>
                </td>
                <td>
                    <input type="number" value="${product.quantity}" class="quantity" data-code="${product.code}" />
                </td>
                <td>
                    <span class="subtotal">$${product.price * product.quantity}</span>
                </td>
                <td><i class="fi fi-rs-trash table__trash" data-code="${product.code}"></i></td>
            </tr>
        `).join('');

        this.content.innerHTML = `
            <table class="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${productHTML}
                </tbody>
            </table>
            <div class="cart__actions">
                <a href="#" class="btn flex btn__md">
                    <i class="fi-rs-shopping-bag"></i> Solicitar compra
                </a>
            </div>`;
        
        const requestToBuyBtn = this.content.querySelector('.btn.flex.btn__md');
        requestToBuyBtn.addEventListener('click', (event) => {
            event.preventDefault();
            
            
        });

        // Actualizar el DOM para reflejar los cambios en el carrito
        return this.content;
    }

    addToCart({code, name, color, size, price}) {
        // Verificar si el producto ya está en el carrito
        const existingProduct = this.products.find(product => product.code === code);

        if (existingProduct) {
            // Si el producto ya está en el carrito, incrementamos la cantidad
            existingProduct.quantity += 1;
        } else {
            // Si no está, agregamos el nuevo producto con cantidad inicial de 1
            this.products.push({
                code,
                name,
                color,
                size,
                price,
                quantity: 1
            });
        }

        // Renderizamos nuevamente el carrito para reflejar los cambios
        this.render();
    }
}

// ========== DOM =============
const cartSection = document.querySelector('.cart.section--lg.container');
let table; // Global

if (cartSection) {
    table = new Cart();
    const tableElement = table.render();
    cartSection.appendChild(tableElement);
} else {
    console.error("El contenedor '.table__container' no existe en el DOM.");
}

// Product list
const plist = [
    [1, 'Boss Hugo Boss', 'Amarillo','Talla única', 1800],
    [2, 'Gucci Gang', 'Rojo','Talla única', 1800],
    [3, 'Hugo Boss', 'Azul','Talla única', 1800],
    [4, 'Boss Hugo Boss', 'Negro','Talla única', 1800],
    [5, 'Versace', 'Gris','Talla única', 1800],
    [6, 'Versace', 'Negro','Talla única', 1800],
    [7, 'Versace', 'Azul','Talla única', 1800],
    [8, 'Nike', 'Negro','Talla única', 1800],
    [9, 'Gucci', 'Negro','Talla única', 1800],
    [10, 'Gucci', 'Blanco','Talla única', 1800],
    [11, 'Gucci', 'Rosado','Talla única', 1800],
    [12, 'Nike', 'Gris','Talla única', 1800],
    [13, 'Boss Hugo Boss', 'Gris','Talla única', 1800],
    [14, 'Hugo Boss', 'Gris','Talla única', 1800]
];

const app = document.querySelector('.products__container.grid');
if (app) {
    plist.forEach(element => {
        const product = new Product({
            code: element[0],
            name: element[1],
            color: element[2],
            size: element[3],
            price: element[4]
        });

        const productElement = product.render();
        if (productElement instanceof HTMLElement) {
            app.appendChild(productElement);
        } else {
            console.error("El método render() debe devolver un elemento HTML válido.");
        }
    });
} else {
    console.error("El contenedor '.products__container' no existe en el DOM.");
}