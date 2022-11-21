const productsContainer = document.querySelector('#products-container');
const detailsImageTitleContainer = document.querySelector('#image-title-container');
const productDetailsInfoContainer = document.querySelector('#product-details-info-container');


// ***** all gnome photos, titles and descriptions from https://www.target.com/ *****
const gnomes = [
    {
        id: 1,
        detailsLink: '',
        category: "lawn and garden",
        title:
            'Sunnydaze Three Wise Garden Gnomes Hear, Speak, See No Evil Indoor/Outdoor Lawn Statue Set - 12" H - 3-Piece Set',
        img: '/img/gnomes/three_wise_gnomes.jpeg',
        description: "",
        stars: 4.5,
        numRating: 259,
        price: 63.49,
    },
    {
        id: 2,
        detailsLink: '',
        category: "christmas indoor",
        title:
            'Northlight Set of 3 Red and Gray Bearded Chubby Santa Christmas Gnomes 10.5',
        img: '/img/gnomes/bearded-chubby.webp',
        description: "",
        stars: 5,
        numRating: 59,
        price: 26.39,
    },
    {
        id: 3,
        detailsLink: '',
        category: "clothing",
        title:
            "Men's Lost Gods Gnome for the Holidays T-Shirt",
        img: '/img/gnomes/gnome-for-holidays.webp',
        stars: 4.5,
        numRating: 19,
        price: 21.99
    },
    {
        id: 4,
        detailsLink: '',
        category: "st patricks day",
        title:
            `Northlight 19" Green Leprechaun Boy St Patrick's Day Gnome`,
        img: '/img/gnomes/st-patty-day.jpeg',
        description: `Gnomes are best known for guarding Earthly treasures, providing good luck, and are perfect for protecting your goodies. This gnome is wearing a green patterned hat with a green sweater and holds a clover. His large bulbous nose pokes out from his long orange beard. Place this gnome on your mantle, or alone on any table for the perfect St Patty's day decoration. Product Features: Boy leprechaun St Patrick's Day gnome Gnome wear a green patterned hat with a matching green sweater Holding a large green clover that reads 'Luck of the Irish' Gnome has long orange beard and bulbous nose Weighted bottom keeps gnome steady Recommended for indoor use Dimensions: 19"H x 7.5"W x 4.5"D Material(s): fabric`,
        stars: 3.5,
        numRating: 17,
        price: 35.99,
    },
    {
        id: 5,
        detailsLink: '',
        category: "lawn and garden",
        title:
            'Design Toscano Garden Gnome Statue - Multicolored',
        img: '/img/gnomes/meditate.jpeg',
        description: "Chill out! The local Garden gnome has decided to strike a lotus position and stop and smell the roses. So peaceful that birds even nest in his beard, our Design Toscano exclusive is whimsically sculpted, then cast in quality designer resin and hand-painted in fanciful hues. This colorful gnome collectible and delightful gnome gift is one of our favorite reminders not to sweat the small stuff.",
        stars: 5,
        numRating: 19,
        price: 30.90
    },
    {
        id: 6,
        detailsLink: '',
        category: "books",
        title:
            'How to Survive a Garden Gnome Attack - by Chuck Sambuchino (Hardcover)',
        img: '/img/gnomes/survive-attack.webp',
        stars: 5,
        numRating: 3,
        price: 9.39,
    },
    {
        id: 7,
        detailsLink: '',
        category: "indoors plush",
        title:
            'Lakeside Plush Seasonal Gnome with Ocean Beach Theme - Indoor Coastal Accent',
        img: '/img/gnomes/ocean.jpeg',
        description: "",
        stars: 4,
        numRating: 114,
        price: 17.99
    }
];

function starGenerator(num) {
    let star = "";
    if(num % 1 === 0) {
        for(let i = 0; i < num; i++) {
            star += `<i class="fas fa-star"></i>`
        }
    } else {
        const floorNum = Math.floor(num);
        for(let i = 0; i < floorNum; i++) {
            star += `<i class="fas fa-star"></i>`
        }
        star += `<i class="fas fa-star-half-alt"></i>`
    }
    return star;
}

function loadAllProducts() {
    for (let i = 0; i < gnomes.length; i++) {
        productsContainer.innerHTML += `
        <div class="product-card">
            <a href="/html/productDetails.html" width="300px" height="500px">
                <img src=${gnomes[i].img} alt="" width="300px">
            </a>
            <div class="product-card-details">
            <a href="/html/productDetails.html" class="product-title">
                <h4 class="product-title-text">
                    ${gnomes[i].title}
                </h4>
            </a>
            <p class="product-stars">
                ${starGenerator(gnomes[i].stars)}
                (${gnomes[i].numRating})
            </p>
            <p class="margin">
                $${gnomes[i].price}
            </p>
            </div>
            <a 
                href="/html/cart.html"
                class="add-cart-button"
                >
                Add to Cart
            </a>
        </div>`
    } 
}


function loadCategoryProducts(category) {
    productsContainer.innerHTML = "";
    console.log("category: ", category.value);
    for (let i = 0; i < gnomes.length; i++) {
        if(gnomes[i].category.includes(category.value)) {
            productsContainer.innerHTML += `
            <div class="product-card">
            <a href="/html/productDetails.html" width="300px" height="500px">
                <img src=${gnomes[i].img} alt="" width="300px">
            </a>
            <div class="product-card-details">
            <a href="/html/productDetails.html" class="product-title">
                <h4 class="product-title-text">
                    ${gnomes[i].title}
                </h4>
            </a>
            <p class="product-stars">
                ${starGenerator(gnomes[i].stars)}
                (${gnomes[i].numRating})
            </p>
            <p class="margin">
                $${gnomes[i].price}
            </p>
            </div>
            <a 
                href="/html/cart.html"
                class="add-cart-button"
                >
                Add to Cart
            </a>
        </div>`
        } 
    }
}


function loadProductDetailsPage() {
    detailsImageTitleContainer.innerHTML += `

    <div class="title-image-container">
        <div>
            <a href="/html/productDetails.html">
            <h4 class="product-title">${gnomes[3].title}</h4>
            </a>
        </div>
        <div>
            <p class="product-stars">
                ${starGenerator(gnomes[3].stars)}
                (${gnomes[3].numRating})
            </p>
        </div>
        <div>
        <a href=""> <img src=${gnomes[3].img
        } class="details-img" alt="" ></a>
        </div>
    </div>
    

    <div class="product-details-info-container">
        <p class="details-price">$${gnomes[3].price}</p>
        <div class="button-quantity-main-container">
            <div class="quantity-container">
                <div class="quantity-container-box left">-</div>
                <div class="quantity-container-box">1</div>
                <div class="quantity-container-box right">+</div>
            </div>
            <a href="/html/cart.html" class="details-cart-button">Add to cart</a>
        </div>
       
    </div>
    
    `
    productDetailsInfoContainer.innerHTML += `
        <p class="description-text">${gnomes[3].description}</p>
    `
}





    

