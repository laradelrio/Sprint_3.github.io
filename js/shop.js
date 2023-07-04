// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
let products = [
    {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

//Price of the cart with discounts
let total = 0;

// Exercise 1
//Find product in array and add to cartList
function buy(id) {
    let foundProduct;
    let i = 0;

    while (i < products.length && foundProduct === undefined) {
        if (products[i].id === id) {
            foundProduct = products[i];
        } else {
            i++;
        }
    }

    cartList.push(foundProduct);
    console.log(cartList);

    document.getElementById("count_product").innerHTML = cartList.length;
}

// Exercise 2
// Remove all items from cart and cartList
function cleanCart() {
    cart = [];
    cartList = [];
    printCart();
    console.log(cart);

}

// Exercise 3
//Calculates total price of cart with discount, if applicable
function calculateTotal() {
    total = 0;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty("subtotalWithDiscount") && (cart[i].quantity >= cart[i].offer.number)) {
            total += cart[i].subtotalWithDiscount;
        } else {
            total += (cart[i].quantity * cart[i].price);
        }
    }

    console.log(total);
}

// Exercise 4
//Makes fills cart with the items of cartList, without repetition (shows quantity)
function generateCart() {
    cart = [];

    for (let i = 0; i < cartList.length; i++) {
        let j = 0;
        let itemNotInCart = true;
        while (j < cart.length && itemNotInCart == true) {
            if (cartList[i].id == cart[j].id) {
                cart[j].quantity++;
                itemNotInCart = false;
            }
            j++
        }

        if (itemNotInCart) {
            cartList[i].quantity = 1;
            cart.push(cartList[i]);
        }

        itemNotInCart = true;
    }

    console.log(cart);
}

// Exercise 5
// Apply promotions to each item in the array "cart"
function applyPromotionsCart() {

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == 1 && cart[i].quantity >= cart[i].offer.number) {
            cart[i].subtotalWithDiscount = cart[i].quantity * 10;
        }

        if (cart[i].id == 3 && cart[i].quantity >= cart[i].offer.number) {
            cart[i].subtotalWithDiscount = cart[i].quantity * (cart[i].price * (2 / 3));
        }

    }

    console.log(cart)
}

// Exercise 6
// Fill the shopping cart modal manipulating the shopping cart dom
function printCart() {
    //generateCart();
    applyPromotionsCart();
    calculateTotal();
    document.getElementById("total_price").innerHTML = total;

    let tbody = document.querySelector("#cart_list");
    tbody.innerHTML = "";
    console.log(cart);
    for (let i = 0; i <= cart.length; i++) {

        let tr = document.createElement("tr");
        tbody.append(tr);

        let th = document.createElement("th");
        th.setAttribute("scope", "row");
        th.innerHTML = cart[i].name;

        let tdPrice1 = document.createElement("td");
        tdPrice1.innerHTML = cart[i].price;

        let tdQuantiy = document.createElement("td");
        tdQuantiy.innerHTML = cart[i].quantity;

        let tdTotalPrice = document.createElement("td");
        if (cart[i].hasOwnProperty("subtotalWithDiscount") && cart[i].quantity >= cart[i].offer.number) {
            tdTotalPrice.innerHTML = cart[i].subtotalWithDiscount;
        } else {
            tdTotalPrice.innerHTML = cart[i].quantity * cart[i].price;
        }

        tr.append(th, tdPrice1, tdQuantiy, tdTotalPrice);
    }
}


// ** Nivell II **

// Exercise 8
//Find clicked product in catalogue. Then add to the cart if it's not there, or increase quanitity if it is
function addToCart(id) {
    let foundProduct;
    let indexFoundProduct;

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            foundProduct = products[i]
            indexFoundProduct = i;
            cartList.push(foundProduct);
        }
    }

    let indexCartProduct = cart.findIndex(cartProduct => cartProduct === foundProduct);

    if (indexCartProduct != -1) {
        cart[indexCartProduct].quantity++;
    } else {
        products[indexFoundProduct].quantity = 1;;
        cart.push(products[indexFoundProduct]);
    }

    document.getElementById("count_product").innerHTML = cartList.length;
}

// Exercise 9
//Remove the items from cartList
function removeFromCart(id) {

    let indexCartProduct = cart.findIndex(cartProduct => cartProduct.id === id);

    if (indexCartProduct != -1) {
        cart[indexCartProduct].quantity--;
        cartList.pop();
        document.getElementById("count_product").innerHTML = cartList.length;
    } else {
        alert("This product is not in the cart")
    }
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}