var metrics = function (incomeNet, expTotal, monPay, price, invBasis) {
	
	var monNOI = opIncome(incomeNet, expTotal);
	var NOI = Math.round(monNOI * 12 * 100) / 100;
	document.getElementById('NOI').innerHTML = '$'+NOI;

	var monCashFlow = monthlyCashFlow(monNOI, monPay);
	var cashFlow = Math.round(monCashFlow * 12 * 100) / 100;
	document.getElementById('cashFlow').innerHTML = '$'+cashFlow;

	capRate(NOI, price);
	cashOnCash(cashFlow, invBasis);
}


// Monthly net operating income (gross income - expenses)
var opIncome = function (incomeNet, expTotal) {
	var opIn = Math.round((incomeNet - expTotal) * 100) / 100;
	document.getElementById('monNOI').innerHTML = '$'+opIn;
	return opIn;
}


// Monthly cash flow (NOI - debt financing)
var monthlyCashFlow = function (NOI, monPay){
	var cash = Math.round((NOI - monPay) * 100) / 100;
	document.getElementById('monCashFlow').innerHTML = '$'+cash;
	return cash;
}


// Annual cap rate (NOI / purchase price)
var capRate = function (NOI, price){
	var cap = Math.round((NOI / price) * 10000) / 10000;
	document.getElementById('capRate').innerHTML = 100*cap+'%';
	return cap;
}


// Annual cash on cash return (cash flow / investment basis)
var cashOnCash = function (cashFlow, invBasis){
	var ccr = Math.round((cashFlow / invBasis) * 10000) / 10000;
	document.getElementById('CCR').innerHTML = 100*ccr+'%';
	return ccr;
}


// Annual total Return on investment (appreciation + equity + taxes, etc. / investment basis)
var  invReturn = function (loanAmnt, intRate, loanTerm){
	
}