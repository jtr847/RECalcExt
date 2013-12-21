var houseInfo = function (price)
{
// var houseProps = {cost: price, fha:{}}
// houseProps.downPaymentTrad = price * 0.2;
// // houseProps.downPaymentFha = price * 0.035;
// houseProps.fha.downPayment = price * 0.035;
tradDownPayment(price)
fhaDownPayment(price)
// return houseProps.downPaymentTrad;
};

// house = houseInfo(100000);
// console.log(house);
// console.log(house.fha);


var tradDownPayment = function (price) {
	var downPayment = Math.round(price * 0.2 * 100) / 100;
	document.getElementsByName('downPayTrad')[0].value = downPayment;
	return downPayment;
}

var fhaDownPayment = function (price) {
	var downPayment = Math.round(price * 0.035 * 100) / 100;
	document.getElementsByName('downPayFha')[0].value = downPayment;
	return downPayment;
}

var roundToCents = function(amount){

}