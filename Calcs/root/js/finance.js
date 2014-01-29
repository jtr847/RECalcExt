var finance = function (price, downpayment) {
	var loanAmnt = loanAmount(price, downpayment);

	// Interest rate field [%]
	var intRate = document.getElementsByName('intRate')[0].value / 100;

	// Loan term field [months]
	var loanTerm = document.getElementsByName('loanLength')[0].value * 12;

	var payments = monPayments(loanAmnt, intRate, loanTerm);
	return payments;
}

var loanAmount = function (price, downpayment) {
	var loanAmnt = Math.round((price - downpayment) * 100) / 100;
	document.getElementById('loanAmnt').innerHTML = '$'+loanAmnt;
	return loanAmnt;
}

var monPayments = function (loanAmnt, intRate, loanTerm){
	var monInt = intRate / 12;
	var payments = loanAmnt * (monInt * Math.pow((1 + monInt),loanTerm)) /(Math.pow((1 + monInt),loanTerm) - 1);
	payments = Math.round(payments * 100)/100;
	document.getElementById('payments').innerHTML = '$'+payments;
	return payments;
}