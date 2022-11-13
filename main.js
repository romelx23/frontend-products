import "./style.css";
import { Navbar } from "./src/components/Navbar/navbar";
import { ListProducts } from "./src/components/ListProducts/listproduct";
import { Cart } from "./src/components/Cart/cart";
import { baseUrl } from "./src/helpers/api";

// declare variables
let products = [];
let cart = [];
let loading = false;

document.querySelector("#app").innerHTML = `
  <div >
    <nav class="navbar sticky top-0" id="navbar"></nav>
    
        <div id="list" class="flex flex-wrap items-center justify-center w-full h-full gap-5 mt-4">
        </div>
        
    <div id="cart" class="fixed top-0 right-0 transition"></div>
    <div id="filter" class="flex flex-col items-center justify-center w-full h-full">
    </div>
  </div>
`;

// declare functions

const fetchProducts = async () => {
  loading = true;
  const res = await fetch(`${baseUrl}/product`);
  const { data } = await res.json();
  products = data;
  loading = false;
  ListProducts(document.querySelector("#list"), products, addCart);
};

const searchProductsByTerm = async (term = "") => {
  const res = await fetch(`${baseUrl}/product/term/${term}`);
  const { data } = await res.json();
  products = data;
  console.log(products);
  if (products.length === 0) {
    document.querySelector(
      "#list"
    ).innerHTML = `<h1>No hay productos que coincidan con tu búsqueda</h1>`;
  } else {
    ListProducts(document.querySelector("#list"), products, addCart);
  }
};

const deleteCart = (product) => {
  cart = cart.filter((p) => p.id !== product.id);
  Cart(document.querySelector("#cart"), cart, deleteCart, toggleCart);
};

const addCart = (product) => {
  cart.push(product);
  Cart(document.querySelector("#cart"), cart, deleteCart, toggleCart);
};

const toggleCart = () => {
  document.querySelector("#cart").classList.toggle("translate-x-full");
};

Navbar(
  document.querySelector("#navbar"),
  fetchProducts,
  searchProductsByTerm,
  toggleCart
);
Cart(document.querySelector("#cart"), cart, deleteCart, toggleCart);
await fetchProducts();
// ListProducts(document.querySelector("#list"), products, addCart);
