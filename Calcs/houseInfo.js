var houseCalc = function (price)
{
var houseInfo = {cost: price, fha:{}}
houseInfo.downPaymentTrad = price * 0.2;
houseInfo.downPaymentFha = price * 0.035;
houseInfo.fha.downPayment = price * 0.035;
return houseInfo;
};

house = houseCalc(100000);
console.log(house);
console.log(house.fha);