export function Navbar(
  element,
  fetchProducts,
  searchProductsByTerm,
  toggleCart
) {
  const navbar = () => {
    element.innerHTML = `
      <a href="#" class="logo">
      <span class="self-center font-semibold text-gray-400 text-2xl">
      Bsale Test</span>
      </a>

      <form action="" class="flex flex-1 items-center" id="formSearch">
        <input type="text" class="" id="search" 
        placeholder="Buscar Producto...">

        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10">Buscar</button>
      </form>

      <a class="text-xl flex items-center justify-center hover:bg-gray-400 p-2 rounded-full" href="#" id="cartLink">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </a>
      `;
    const link = document.getElementById("cartLink");
    link.addEventListener("click", toggleCart);
  };
  navbar();
  const form = document.getElementById("formSearch");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (e.target.search.value === "") {
      fetchProducts();
      return;
    }
    const search = document.getElementById("search").value;
    console.log(search);
    await searchProductsByTerm(search);
  });
}
