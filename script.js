//fetching data from rainydays API

const jacket_url = "https://api.noroff.dev/api/v1/rainy-days";
const products = document.getElementsByClassName(".products");


async function getJackets() {
    //fetch function in use 
    const response = await fetch(jacket_url); // fetching the url
    const results = await response.json(); // making the url readable that is in JSON format
    const jacket = results; // we got an array of objects, putting that array in a variable

    //to loop over that array

    for (let i = 0; i < jacket.length; i++) {
        console.log(jacket[i].title);
        products.innerHTML += `
        <div class="product">
        <img src="" alt="" class="product_image" ${jacket[i].price}>
        <h4 class="product_title">${jacket[i].title}</h4>
        <p class="product_price">${jacket[i].price}</p>
        <a href="productDetail.html" class="btn"></a>
      </div> `;
    }
}

getJackets();