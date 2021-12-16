const cartContainer = document.querySelector('.cart');
const cartIcon = document.querySelector('.cartIcon');
cartIcon.addEventListener('click', () => {
    cartContainer.classList.toggle('hide');
})



const cartBody = document.querySelector('.cart-body');
const allProducts = document.querySelector('.featuredItems');
const addCartBtns = document.querySelectorAll('.featuredImgDark button');

let num = 0;
let productName = `${document.querySelector(`.featuredName`).innerText}`;
let productCount = {};
let productPrice = document.querySelectorAll('.featuredPrice span');

allProducts.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {

        for(let i = 0; i < addCartBtns.length; i++) {
            if (i === +(event.target.dataset.id)) {
                num = i;
            }
        }
        
        if (!(num in productCount)) {
            productCount[num] = {count: 0};
        }
        
        productCount[num].count++;
        console.log(productCount)

        let productSum = productCount[num]['count'] * productPrice[num].innerText;
    
        let productCode = `
        <div class="product_${num}">
            <p>${productName}_${num}</p>
            <p><span class="count">${productCount[num]['count']}</span> шт.</p>
            <p>${productPrice[num].innerText}$</p>
            <p>$<span class="product-sum">${productSum}</span></p>
        </div>
        <hr>`;
    
        let productCard = document.querySelector(`.product_${num}`);
    
        if (productCard) {
            document.querySelectorAll('.count')[num].innerText = productCount[num]['count'];
            document.querySelectorAll('.product-sum')[num].innerText = productSum;
        } else {
            cartBody.insertAdjacentHTML("beforeend", productCode);
        }

        let productSums = document.querySelectorAll('.product-sum');
        let productCounts = document.querySelectorAll('.count');
        let fullPrice = 0;
        let fullCounts = 0;
        
        for(let j = 0; j < productSums.length; j++) {
            fullPrice += +productSums[j].innerText;
            fullCounts += +productCounts[j].innerText;
        }

        document.querySelector('.full-price').innerText = fullPrice;
        document.querySelector('.cart-count').innerText = fullCounts;

    }

})