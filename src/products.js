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
 