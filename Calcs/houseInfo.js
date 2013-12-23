var houseInfo = function (price){
	var trad = document.getElementsByName('loan')[0].checked;
	var fha = document.getElementsByName('loan')[1].checked;
	
	var downpayment;
	if (trad || (!fha && !trad)){
		downpayment = tradDownPayment(price);
		}
	if (fha){
		var downpaymentFha = fhaDownPayment(price);
		if (!trad){
			downpayment = downpaymentFha;
			}
		}
	
	
	var closeStr = document.getElementsByName('closeCost')[0].value;
	var closeCost;
	if (closeStr == null || closeStr.trim() == "") {
		closeCost = closingCosts(price);
		}
	else {
		closeCost = Math.round(closeStr*100)/100
		};
	
	var holdStr = document.getElementsByName('holdCost')[0].value;
	var holdCost;
	if (holdStr == null || holdStr.trim() == "") {
		holdCost = holdingCosts(price);
		}
	else {
		holdCost = Math.round(holdStr*100)/100
		};
	
	var repairCost = Math.round(document.getElementsByName('repairs')[0].value * 100)/100;
	var investBasis = closeCost + holdCost + downpayment + repairCost;
	document.getElementById("investBasis").innerHTML = investBasis;
	// add income calculations (adding rent and other income) & writes
	return [downpayment, downpaymentFha, investBasis];
}

var tradDownPayment = function (price) {
	var downPayment = Math.round(price * 0.2 * 100) / 100;
	document.getElementById('downPayTrad').innerHTML = downPayment;
	return downPayment;
}

var fhaDownPayment = function (price) {
	var downPayment = Math.round(price * 0.035 * 100) / 100;
	document.getElementById('downPayFha').innerHTML = downPayment;
	return downPayment;
}

var closingCosts = function (price) {
	var closeCost = Math.round(price * 0.02 * 100) / 100;
	document.getElementsByName('closeCost')[0].value = closeCost;
	return closeCost;
}

var holdingCosts = function (price) {
	var holdCost = Math.round(price * 0.01 * 100) / 100;
	document.getElementsByName('holdCost')[0].value = holdCost;
	return holdCost;
}