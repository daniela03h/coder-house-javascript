import fechtProducts from "./fetch-products.js";

const spinner = document.querySelector(".spinner");
const productList = document.querySelector(".product-list");
const searchInput = document.querySelector('input[type="search"]');
const categoriesFilters = document.querySelectorAll(".category-btn");
const cartIcon = document.querySelector(".ph-shopping-cart");

const productCard = (product) => `
<article class="card" style="width: 100%">
            <img
              src="${product.image}"
              class="card-img-top product-image"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">$ ${product.price}</p>
              <Button class="btn btn-primary add-to-cart-button" data-product-id="${product.id}">
                <i class="ph ph-plus"></i>Add to Cart</Button
              >
            </div>
          </article>
`;

async function main() {
  const products = await fechtProducts();

  const productsToDisplay = products
    .map((product) => productCard(product))
    .join("\n");
  spinner.style.display = "none";
  productList.innerHTML = productsToDisplay;

  const cart = JSON.parse(window.localStorage.getItem("cart") || "[]");
  cartIcon.setAttribute("data-content", cart.length);

  const addEventToButtons = () => {
    const addEventToButtons = document.querySelectorAll(".add-to-cart-button");

    addEventToButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const productId = event.target.getAttribute("data-product-id");
        const product = products.find((product) => product.id == productId);

        const cart = JSON.parse(window.localStorage.getItem("cart") || "[]");
        cart.push(product);
        window.localStorage.setItem("cart", JSON.stringify(cart));
        cartIcon.setAttribute("data-content", cart.length);

        Swal.fire({
          title: "Product Added!",
          text: "Your product was added to the cart",
          icon: "success",
          confirmButtonColor: "#0d6efd",
        });
      });
    });
  };

  addEventToButtons();

  searchInput.addEventListener("search", (event) => {
    const searchParam = event.currentTarget.value;

    if (
      searchParam === "" ||
      searchParam === null ||
      searchParam === undefined
    ) {
      productList.innerHTML = productsToDisplay;
      addEventToButtons();
      return;
    }
    const filtersProductsToDisplay = products
      .filter((product) =>
        product.title.toLowerCase().includes(searchParam.toLowerCase())
      )
      .map((product) => productCard(product))
      .join("\n");
    productList.innerHTML = filtersProductsToDisplay;
    addEventToButtons();
  });

  categoriesFilters.forEach((categoryFilter) => {
    categoryFilter.addEventListener("click", (event) => {
      const searchParam = event.target.name;

      if (
        searchParam === "all categories" ||
        searchParam === null ||
        searchParam === undefined
      ) {
        productList.innerHTML = productsToDisplay;
        addEventToButtons();
        return;
      }
      const filtersProductsToDisplay = products
        .filter((product) =>
          product.category.toLowerCase().includes(searchParam.toLowerCase())
        )
        .map((product) => productCard(product))
        .join("\n");
      productList.innerHTML = filtersProductsToDisplay;
      addEventToButtons();
    });
  });
}

main();
