import axios from './node_modules/axios/dist/axios.min.js';

// POSTMAN Mock Server를 이용한 임시 url 생성하여 get endpoint 작성 /product
// axios와 innerHTML을 이용한 DOM 공부
axios
  .get('https://0341113f-6211-4c3a-b909-a5707803615d.mock.pstmn.io/product')
  .then((res) => {
    console.log(res.data);
    const products = res.data.products;

    let productsHtml = '';

    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      productsHtml += `
    <div class="product-card">
      <div>
        <img class="product-img" src=${product.imageUrl} />
        <div class="product-contents">
          <span class="product-name">${product.name}</span>
          <span class="product-price">${product.price}원</span>
          <div class="product-seller">
            <img class="product-avatar" src='images/icons/avatar.png' />
            <span>${product.seller}</span>
          </div>
        </div>
      </div>
    </div>`;
    }

    document.querySelector('#product-list').innerHTML = productsHtml;
  })
  .catch((err) => {
    console.log(err);
  });
