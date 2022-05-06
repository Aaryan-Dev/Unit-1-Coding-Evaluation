// You are given two arrays, both of given sizeN

// The first array represents the price of commodities present in your cart, represented by the variable nameprice

// The second array represents the quantity of each commodity that you need, represented by the variable namequantity

// You have to find the total price of the commodities present in the cart

// For example, consider the value stored inN = 3, and the first array isprice = [100,20,40], and the second array isquantity = [2,1,2]

// Then, the required cart total will be

// Cart Total = (100 * 2 + 20 * 1 + 40 * 2) = (200 + 20 + 80) = 300
// Therefore, the required output will be 300

function cartTotal(N, price, quantity) {
  
    let sum = 0;
for(i=0; i<price.length; i++){
    sum = sum + price[i]*quantity[i];
}
console.log(sum);
}