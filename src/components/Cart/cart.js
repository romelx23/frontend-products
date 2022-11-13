export function Cart(element, cart = [], deleteCart, toggleCart) {
  // console.log(cart, "line 2 cart");
  const totalProducts = cart.length;
  const totalCart = cart.reduce((acc, product) => acc + product.price, 0);
  const cartProducts = () => {
    const p = cart.map((product) => {
      const productElement = document.createElement("div");
      const btnDelete = document.createElement("button");
      btnDelete.classList.add("bg-red-600", "rounded", "w-full", "py-1");
      btnDelete.innerHTML = "Eliminar";
      btnDelete.addEventListener("click", () => {
        deleteCart(product);
      });
      productElement.innerHTML = `
      <div class="w-full p-4 rounded-lg flex justify-between bg-gray-900">
      <img class="w-20" src="${product.url_image}" alt="${product.name}"  name="${product.name}">
        <div class="flex flex-col justify-between">
            <h1 class="text-sm py-2">${product.name}</h1>
            <p>precio: ${product.price}</p>
        </div>
      </div>
  `;
      productElement.appendChild(btnDelete);
      return productElement;
    });
    element.innerHTML = `
    <div class="w-60 max-w-sm min-h-screen bg-slate-700/70 rounded-md py-2 overflow-y-auto">
      <div class="flex justify-between items-center px-4 py-5">
      <h2 class="font-semibold">Carrito</h2>
      <button class="bg-red-600 rounded flex justify-center items-center w-8 h-8" id="btnCloseCart">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      </div>
      <div class="flex flex-col w-full gap-2 h-[80vh] overflow-y-auto" id="contentCart">
      </div>
      <div class="flex flex-col justify-center">
        <p class="text-white">Mostrando ${totalProducts} productos</p>
        <p class="text-white">Total: ${totalCart}</p>
      </div>
    </div>
          `;
    const contentCart = document.getElementById("contentCart");
    contentCart.append(...p);
    btnCloseCart.addEventListener("click", () => {
      toggleCart();
    });
  };
  cartProducts();
}
