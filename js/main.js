/* ============================================
   Main JS - Welcome Page (index.html)
   ============================================
   This file handles the logic for the welcome page:
   - Loading popular products from Supabase
   - Loading products on sale from Supabase
   - Any animations or interactions on the home page
   ============================================ */


// ===== LOAD POPULAR PRODUCTS =====
// TODO: Create a function that fetches popular products from Supabase
//
// async function loadPopularProducts() {
//     const { data, error } = await supabase
//         .from('products')
//         .select('*')
//         .eq('is_popular', true);
//
//     if (error) {
//         console.error('Error loading popular products:', error);
//         return;
//     }
//
//     const container = document.getElementById('popular-products-list');
//     data.forEach(product => {
//         container.innerHTML += createProductCard(product);
//     });
// }


// ===== LOAD ON SALE PRODUCTS =====
// TODO: Create a similar function for products on sale
//   - Filter by is_on_sale = true
//   - Display in the #on-sale-list container
//   - Show both original price (crossed out) and sale price


// ===== PRODUCT CARD TEMPLATE =====
// TODO: Create a helper function that returns the HTML for a product card
//
// function createProductCard(product) {
//     return `
//         <div class="col-md-4 mb-4">
//             <div class="card">
//                 <img src="${product.image_url}" class="card-img-top" alt="${product.name}">
//                 <div class="card-body">
//                     <h5 class="card-title">${product.name}</h5>
//                     <p class="card-text">${product.description}</p>
//                     <p class="card-text"><strong>${product.price} DT</strong></p>
//                 </div>
//             </div>
//         </div>
//     `;
// }


// ===== INITIALIZE =====
// TODO: Call your functions when the page loads
// document.addEventListener('DOMContentLoaded', () => {
//     loadPopularProducts();
//     loadOnSaleProducts();
// });
