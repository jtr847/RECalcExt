var houseInfo = function (price){
	var trad = document.getElementsByName('loan')[0].checked;
	var fha = document.getElementsByName('loan')[1].checked;
	
	
	// downpayment based on which option is checked
	// Change to radio button
	var downpayment
	if (trad || (!fha && !trad)){
		downpayment = tradDownPayment(price);
		}
	if (fha){
		var downpaymentFha = fhaDownPayment(price);
		if (!trad){
			downpayment = downpaymentFha;
			}
		}
	
	
	// Closing costs
	if (document.getElementsByName('closeChk')[0].checked) {
		closeCost = Math.round(document.getElementsByName('closeCost')[0].value*100)/100;
	}else {
		closeCost = closingCosts(price);
	}
	

	// Holding costs
	if (document.getElementsByName('holdChk')[0].checked) {
		holdCost = Math.round(document.getElementsByName('holdCost')[0].value*100)/100;
	}else {
		holdCost = holdingCosts(price);
	}
	
	
	// Initial cost of repairs
	var repairCost = Math.round(document.getElementsByName('repairs')[0].value * 100)/100;
	// Total investment basis
	var investBasis = closeCost + holdCost + downpayment + repairCost;	
	document.getElementById("investBasis").innerHTML = investBasis;
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