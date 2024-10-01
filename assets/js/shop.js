

// CART SALES 

// function addToCart(product) {
//   const cart = document.querySelector('.cart .table tbody');

//   const productRow = document.createElement('tr');
//   productRow.innerHTML = `
//     <td>
//       <img src="${product.image1}" alt="${product.title}" class="table__img" />
//     </td>
//     <td>
//       <h3 class="table__title">${product.title}</h3>
//     </td>
//     <td>
//       <span class="table__price">$${product.price}</span>
//     </td>
//     <td><input type="number" value="1" class="quantity" /></td>
//     <td><span class="subtotal">$${product.price}</span></td>
//     <td><i class="fi fi-rs-trash table__trash"></i></td>
//   `;

//   cart.appendChild(productRow);
// }





// const addToCartBtn = document.querySelector('.cart__btn');
// addToCartBtn.addEventListener('click', function(event) {
//     event.preventDefault(); 
//     const 
// });


// const order = document.querySelector('.cart__actions .btn');

// if (order) {
//     order.addEventListener('click', function(event) {
//         event.preventDefault();
        
//         const productId = 1;  // ID del producto
//         const phoneNumber = '5354725584';  // Número de WhatsApp con el código del país
//         const message = `Hola, quiero comprar el producto con ID: ${productId}`;

//         // Crear el enlace a WhatsApp
//         const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

//         // Redirigir a WhatsApp
//         window.location.href = whatsappURL;
//     });
// }
