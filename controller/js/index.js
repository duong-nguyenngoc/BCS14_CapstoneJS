function getProduct() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
  promise.then(function (result) {
    console.log("result", result.data);
    renderProduct(result.data.content);
  });
  promise.catch(function (error) {
    console.log("result", error.repose.data);
  });
}

// goi ham
window.onload = function () {
  getProduct();
};

function renderProduct(arrProduct) {
  let content = "";
  for (let i = 0; i < arrProduct.length; i++) {
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
                <div class="price">$ ${product.price}</div>
              </div>
            </div>
          </div>`;
  }
  document.getElementById("product_list").innerHTML = content;
}
