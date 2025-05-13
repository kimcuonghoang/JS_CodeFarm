const productElement = document.getElementById("products");
const previewElement = document.getElementById("preview");
const currentPage = document.getElementById("current-page");
const nextElement = document.getElementById("next");
const sortElement = document.getElementById("sort-price");

let page = 1;
let limit = 10;
let skip = 0;
let totalProduct;
let allProducts = [];

const fetchProduct = async (limit = 10, skip = 0) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const { products, total } = await res.json();
    totalProduct = total;
    allProducts = products;
    renderUI(products);
  } catch (error) {
    console.log(error);
  }
};

const renderUI = (products) => {
  productElement.innerHTML = "";
  products.forEach((item) => {
    const productEle = document.createElement("div");
    productEle.classList.add("products-item");
    productEle.innerHTML = `
      <img src="${item.thumbnail}" />
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <span>Price: ${item.price}$</span>
      <br/>
      <button class="detail-btn" data-id="${item.id}">Xem chi tiết</button>
    `;
    productElement.appendChild(productEle);
  });

  const detailButtons = document.querySelectorAll(".detail-btn");
  detailButtons.forEach((btn) => {
    btn.addEventListener("click", async function () {
      const productId = this.getAttribute("data-id");
      await fetchProductDetail(productId);
    });
  });
};

const fetchProductDetail = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    console.log(data);
    const detailElement = document.getElementById("product-detail");
    if (detailElement) {
      detailElement.innerHTML = `
       <div class="product-detail-title">
       
        <img src="${data.thumbnail}" />
       </div>
       <div class="product-detail">
        <h2>${data.title}</h2>
        <p><strong>Description:</strong> ${data.description}</p>
        <p><strong>Price:</strong> ${data.price}$</p>
        <button class="addToCart-btn">Add To Cart</button>
       </div>
      `;
      detailElement.scrollIntoView({ behavior: "smooth" });
    }
  } catch (error) {
    console.log(error);
  }
};

currentPage.innerText = page;

previewElement.addEventListener("click", function () {
  if (page > 1) {
    page--;
    currentPage.innerText = page;
    skip = (page - 1) * limit;
    fetchProduct(limit, skip);
  }
});

nextElement.addEventListener("click", function () {
  const pageMax = Math.ceil(totalProduct / limit);
  if (page < pageMax) {
    page++;
    currentPage.innerText = page;
    skip = (page - 1) * limit;
    fetchProduct(limit, skip);
  }
});

async function searchForm() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const searchProduct = await fetch(
    `https://dummyjson.com/products/search?q=${keyword}`
  );
  const data = await searchProduct.json();
  renderUI(data.products);
}

sortElement.addEventListener("change", function () {
  const sortType = sortElement.value;
  let sortedProducts = [...allProducts];

  if (sortType === "asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === "desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  renderUI(sortedProducts);
});

fetchProduct();
