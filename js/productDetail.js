function getJacketIdFromQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.get("id"));
  return urlParams.get("id");
}

function getJacketTitleFromQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.get("title"));
  return urlParams.get("title");
}

//FUNCTION TO FETCH ITEM DETAIL USING ITEM ID AND TITLE-------------------------

async function fetchJacketDetail() {

  const itemId = getJacketIdFromQuery();
  const itemTitle = getJacketTitleFromQuery();

  if (!itemId) {
    return;
  }

  const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${itemId}`);
  const jacketDetail = await response.json();
  const titleContainer = document.querySelector(".jacketTitle");
  const jacketDetailContainer = document.querySelector(".product_container");


  jacketDetailContainer.innerHTML += `<h2>${jacketDetail.id}: ${jacketDetail.setup}<h2>
    <p>${jacketDetail}</p>
    
    <div class="product_container">
    <div class="image_container">
      <img src="" alt="">
    </div>
    <div class="details">
      <p class="jacketId">${jacketDetail.itemId}</p>
      <h2 class="jacketTitle">${jacketDetail.itemTitle}<h2>
          <h5 class="price"><h5>
              <select class="sizes">
                <option>Select Size</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <input type="number" value="1">
              <button>
                <a href="checkOut.html" class="btn">Add To Cart</a>
              </button>

              <h3 class="description">Product Specifications</h3>

    </div>
  </div>
`;

}

fetchJacketDetail();
