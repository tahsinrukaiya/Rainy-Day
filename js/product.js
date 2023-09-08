//fetching data from rainydays API

const jacket_url = "https://api.noroff.dev/api/v1/rainy-days";
const products = document.querySelector(".products");

try {
  async function getJackets() {
    //Showing Loading Indication
    loadingIndicator();
    //fetch function in use 
    products.innerHTML = "";
    const response = await fetch(jacket_url); // fetching the url
    const results = await response.json(); // making the url readable that is in JSON format
    const jacket = results; // we got an array of objects, putting that array in a variable

    //to loop over that array

    for (let i = 0; i < jacket.length; i++) {
      console.log(jacket[i].title);
      products.innerHTML += `
        <div class="product">
        <img src="${jacket[i].image}" class="product-image"/>
        <h4 class="product_title">${jacket[i].title}</h4>
        <p class="product_price">${jacket[i].price}</p>
        <a href="productDetail.html?id=${jacket[i].id}&title=${jacket[i].title}" class="btn">Buy Now</a>
      </div> `;
    }
  }

  //Function for Loading Indicator
  function loadingIndicator() {
    const products = document.querySelector(".products");
    products.innerHTML = "<li>Loading...</li>";
  }

  getJackets();
}

catch {
  error();
}





/*for learning
innerHTML is an HTML element property that has two uses for web developers:
 1) You can use it to get the internal HTML content of any HTML element as an HTML string.
  2) You can also use it to set or change elements' innerHTML content.
*/