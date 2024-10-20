function getProductList() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
  promise.then(function (result) {
    console.log("result", result.data);
    renderProduct(result.data.content);
  });
  promise.catch(function (error) {
    console.log("error", error.data);
  });
}

// goi ham khi load trang
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  console.log({ urlParams });
  const productId = urlParams.get("productId");
  console.log("params", productId);
  getDetail(productId);
  getProductList();
};

function getDetail(myParam) {
  let promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=` + myParam,
    method: "GET",
  });
  promise.then(function (result) {
    console.log("param", result.data.content);
    renderDetail(result.data.content);
  });
  promise.catch(function (error) {});
}

// dung html
function renderProduct(arrProduct) {
  let content = " ";
  for (let i = 0; i < arrProduct.length - 15; i++) {
    let product = arrProduct[i];
    content += `
    <div class="product_item col-lg-4 col-md-6 col-sm-12">
            <div class="card_wrap">
              <div class="card_body">
                <img src="${product.image}" alt="" />
                <h4>${product.name}</h4>
                <p>${product.shortDescription}</p>
              </div>
              <div class="card_footer">
                <button><a href="../../detail.html?productId=${product.id}">Buy Now</a></button>
                <div class="price">${product.price}$</div>
              </div>
            </div>
          </div>`;
  }
  document.getElementById("product_list").innerHTML = content;
}

function renderDetail(arrProduct) {
  let html = " ";
  let content = " ";
  for (let i = 0; i < arrProduct.size.length; i++) {
    let productSize = arrProduct.size[i];
    content += `<div>${productSize}</div>`;
  }
  html = `
    <div class="container">
        <div class="img">
          <img src="${arrProduct.image}" alt="" />
        </div>
        <div class="information">
          <h2 class="detail_name">${arrProduct.name}</h2>
          <p class="detail_description">${arrProduct.description}</p>
          <h3>Available Size</h3>
          <div class="detail_size d-flex">
            ${content}
          </div>
          <p class="detail_price">$ ${arrProduct.price}</p>
          <div class="amount">
            <button class="btn btn-primary">+</button>
            <span>1</span>
            <button class="btn btn-primary">-</button>
          </div>
          <button class="add_product">Add To Cart</button>
        </div>
    </div>
      `;

  document.querySelector(".product_detail").innerHTML = html;
}
