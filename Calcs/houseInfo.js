var houseInfo = function (price){
	var trad = document.getElementsByName('loan')[0].checked;
	var fha = document.getElementsByName('loan')[1].checked;

	if (trad || (!fha && !trad)){
		tradDownPayment(price);
	}
	if (fha){
		fhaDownPayment(price);
	}
}

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