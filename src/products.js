var products = [
  { id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
  { id: 102, name: "Football", image: "football.png", price: 120 },
  { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
  { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
  { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
];
var cart = [];
// product listing
var i = 0;
function dynDisp(showcont) {
  var maindiv = "";
  showcont.forEach((element) => {
    maindiv +=
      '<div id="product-' +
      element.id +
      '" class="product"><img src="images/' +
      element.image +
      '"><h3 class="title"><a href="#">Product' +
      element.id +
      " </a></h3><span>Price: $" +
      element.price +
      '</span><a class="add-to-cart" value="' +
      i++ +
      '" >Add To Cart</a></div>';
  });
  maindiv += "";
  document.getElementById("products").innerHTML = maindiv;
}
dynDisp(products);
function cartDisp() {
  if (cart.length < 1) {
    cartTble = "YOUR SHOPPING CART IS EMPTY! START ADDING PRODUCTS";
  } else {
    var grandTotal = 0;
    var cartTble =
      "<div class='Notification'></div><div class='Header'><h3 class='Heading'>Shopping Cart</h3><h5 class='Action'>Remove all</h5></div>";
    cart.forEach((element) => {
      cartTble +=
        "<div class='Cart-Items'><div class='image-box'><img src='./images/" +
        products[element.id].image +
        "' style={{ height='120px' }} /></div><div class='about'><h1 class='title'>" +
        products[element.id].name +
        "</h1><br><h3 class='subtitle'>ID:" +
        products[element.id].id +
        "</h3></div><div class='counter'><div class='btnm' value='" +
        element.id +
        "'>-</div><div class='count'>" +
        element.quantity +
        "</div>  <div class='btnp' value='" +
        element.id +
        "'>+</div></div><div class='prices'><div class='amount'>$" +
        products[element.id].price +
        "</div> <div class='Subtotal'>Sub-Total</div><div class='items'>$" +
        element.quantity * products[element.id].price +
        "</div>  <div class='remove'  value='" +
        element.id +
        "'><u>Remove</u></div></div></div>";
      grandTotal = grandTotal + element.quantity * products[element.id].price;
    });
    cartTble +=
      "<hr><div class='checkout'><div class='total'><div><div class='Subtotal'>Sub-Total</div><div class='items'>" +
      cart.length +
      " items</div></div><div class='total-amount'>$" +
      grandTotal +
      "</div></div><button class='button'>Checkout</button></div>";
  }
  document.getElementById("cart").innerHTML = cartTble;
}
cartDisp();
// add to cart
//cartDisp();
$(document).ready(function () {
  $(".add-to-cart").on("click", function () {
    //if cart is blank
    var get_pr_id = $(this).attr("value");
    var prQuan = 1;
    if (cart.length == 0) {
      var proToCart = {
        id: get_pr_id,
        quantity: prQuan,
      };
      cart.push(proToCart);
    } else if (cart.length > 0) {
      var flag = 0;
      cart.forEach((element) => {
        if (element.id == get_pr_id) {
          flag = 1;
          element.quantity = element.quantity + 1;
        }
      });
      if (flag == 0) {
        var proToCart = {
          id: get_pr_id,
          quantity: prQuan,
        };
        cart.push(proToCart);
      }
    }
    cartDisp();
  });

  //increase counter
  $(document).on("click", ".btnp", function () {
    var proId = $(this).attr("value");
    var proInd = cart.findIndex((ind) => {
      return ind.id === proId;
    });
    cart[proInd].quantity = cart[proInd].quantity + 1;
    cartDisp();
  });
  //decrease counter
  $(document).on("click", ".btnm", function () {
    var proId = $(this).attr("value");
    var proInd = cart.findIndex((ind) => {
      return ind.id === proId;
    });
    if (cart[proInd].quantity == 1) {
      let confirmText =
        "Completely remove product from the list press OK to remove or Cancel to not.";
      if (confirm(confirmText) == true) {
        cart.splice(proInd, 1);
      } else {
        alert("PRODUCT NOT REMOVED");
      }
    } else {
      cart[proInd].quantity = cart[proInd].quantity - 1;
      console.log(proInd);
    }
    console.log(proInd);
    cartDisp();
  });
  //remove product cmpletly
  $(document).on("click", ".remove", function () {
    var proId = $(this).attr("value");
    var proInd = cart.findIndex((ind) => {
      return ind.id === proId;
    });
    console.log(proId);
    let confirmText =
      "Are you sure you want to delete this product press OK to remove or Cancel to not.";
    if (confirm(confirmText) == true) {
      cart.splice(proInd, 1);
    } else {
      alert("PRODUCT NOT REMOVED");
    }
    cartDisp();
  });
  //empty the cart
  $(document).on("click", ".Action", function () {
    let confirmText =
      "Completely remove all product from the list press OK to remove or Cancel to not.";
    if (confirm(confirmText) == true) {
      cart = [];
    } else {
      alert("PRODUCT NOT REMOVED");
    }
    cartDisp();
  });
});
