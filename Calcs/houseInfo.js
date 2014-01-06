var houseInfo = function (price){

	var trad = document.getElementsByName('loan')[0].checked;
	var fha = document.getElementsByName('loan')[1].checked;
	var cust = document.getElementsByName('loan')[2].checked;
		
	// Downpayment based on which option is checked
	if (trad) {
		var downpayment = tradDownPayment(price);
	}else if (fha) {
		var downpayment = fhaDownPayment(price);
	}else if (cust) {
		var downpayment = custDownPayment(price);
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
	document.getElementById("investBasis").innerHTML = '$'+investBasis;
	return [downpayment, investBasis];
}


var tradDownPayment = function (price) {
	var downPayment = Math.round(price * 0.2 * 100) / 100;
	document.getElementById('downPay').innerHTML = '$'+downPayment;
	document.getElementById('downPayTxt').innerHTML = 'Down Payment (20%)';
	return downPayment;
}


var fhaDownPayment = function (price) {
	var downPayment = Math.round(price * 0.035 * 100) / 100;
	document.getElementById('downPay').innerHTML = '$'+downPayment;
	document.getElementById('downPayTxt').innerHTML = 'Down Payment (3.5%)';
	return downPayment;
}


var custDownPayment = function (price) {
	var perc = document.getElementsByName('loan')[3].value;
	var downPayment = Math.round(price * perc) / 100;
	document.getElementById('downPay').innerHTML = '$'+downPayment;
	document.getElementById('downPayTxt').innerHTML = 'Down Payment (' + perc + '%)';
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