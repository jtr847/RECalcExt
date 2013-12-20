var houseInfo = function (price)
{
var houseProps = {cost: price, fha:{}}
houseProps.downPaymentTrad = price * 0.2;
houseProps.downPaymentFha = price * 0.035;
houseProps.fha.downPayment = price * 0.035;

var doubled = price * 2;
console.log(price)
console.log(doubled)
return doubled;
};

// house = houseInfo(100000);
// console.log(house);
// console.log(house.fha);