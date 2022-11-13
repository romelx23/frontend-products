export function ListProducts(element, products = [], addCart) {
  const listproducts = () => {
    console.log(products, "line 3 listproducts");

    const p = products.map((product) => {
      const productElement = document.createElement("div");
      productElement.innerHTML = `
      <div class="w-48 p-4 rounded-lg flex flex-col justify-between bg-gray-900/40">
          <h1 class="text-xl py-2">${product.name}</h1>
          <img src="${product.url_image}" alt="${product.name}"  name="${product.name}">
          <p>precio: ${product.price}</p>
          <p>descuento: ${product.discount}</p>
          <p>categoría: ${product.category}</p>
          <button class="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" id="btnCart">Agregar al carrito
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
          </button>
      </div>
  `;
      productElement
        .querySelector("button")
        .addEventListener("click", () => addCart(product));
      return productElement;
    });
    element.innerHTML = `
    <div class="w-full py-2">
      <h2 class="font-semibold">Productos</h2>
      <div class="flex justify-center flex-wrap w-full gap-4" id="content">
      </div>
    </div>
          `;
    const contentCart = document.getElementById("content");
    contentCart.append(...p);
  };
  listproducts();
}
