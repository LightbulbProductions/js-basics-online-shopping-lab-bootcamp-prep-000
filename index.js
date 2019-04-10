var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * Math.floor(100));
cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0){ 
    console.log(`How sad for you today.`);
  } else {
    var statement = "In your cart, you have ";
      for (var i = 0; i < cart.length; i++) {
          var currentItem = cart[i];
            for (var itemName in currentItem) {
            statement += `In your cart, you have ${itemName} at ${currentItem[itemName]},`;
            
            if (i === cart.length -1) {
              statment += `and ${itemName} at ${currentItem[itemName]}.`;
            }
          }
      }
    console.log(statement);
  }
}

          

 function total() {
  var totalValue = 0;
  for (var i = 0; i < cart.length; i++) {
    var currentItem = cart[i]; 
    
    for (var name in currentItem) {
      totalValue += currentItem[name];
    }
  }
  return totalValue;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var currentItem = cart[i];
    
    for (var itemName in currentItem) {
      if (item === itemName) {
        cart.splice(i, 1)
       return cart;
      } else {
        console.log(`That item is not in your cart.`);
        return cart;
      }
    }
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is ${totalValue()}, which will be charged to the card ${cardNumber}.`);
    //cart = [];
    //return cart;
  }
}


