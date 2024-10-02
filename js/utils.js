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

            <!-- Add to car -->
            <a href="#" class="action__btn cart__btn" aria-label="Añadir al carrito" data-product-id="${this.code}">
                <i class="fi fi-rs-shopping-bag-add"></i>
            </a>
        </div>`;

        return productHTML;
    }
}

class Cart {
    l
    constructor() {
        this.product = ``;
        this.content =  document.createElement('div');
        this.content.className = 'table__container';
    }

    render() {
        this.content.innerHTML = `
            <table class="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Rename</th>
                    </tr>
                </thead>
                    ${this.product}
                <tbody>
                </tbody>
            </table>
            
            <div class="cart__actions">
                <a href="#" class="btn flex btn__md">
                    <i class="fi-rs-shopping-bag"></i> Solicitar compra
                </a>
            </div>`;
        return this.content;
    }

    addToCart({code, name, color, size, price}) {
        this.product = `
            <tr>
                <td>
                    <img
                        src="./assets/img/products/P1.png"
                        alt=""
                        class="table__img"
                    />
                </td>
                <td>
                    <h3 class="table__title">
                        J.Crew Mercantile Women's Short-Sleeve
                    </h3>
                    <p class="table__description">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </td>
                <td>
                    <span class="table__price">$110</span>
                </td>
                <td><input type="number" value="3" class="quantity" /></td>
                <td><span class="subtotal">$220</span></td>
                <td><i class="fi fi-rs-trash table__trash"></i></td>
            </tr>
        `;
    }
}

const cartSection = document.querySelector('.cart.section--lg.container');
if (cartSection) {
    const table = new Cart();
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