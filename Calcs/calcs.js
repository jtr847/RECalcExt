

$(document).ready(function(){
	$('#clear').click(function(){
		defaults();
	});

	$('#calcs').click(function(){
		var price = parseFloat(document.getElementsByName('price')[0].value);
		calcs(price);
	});

	var calcs = function(price) {
		var houseCalcs = houseInfo(price);
		var monPayments = finance(price, houseCalcs[0]);
		
		var incomeRent = parseFloat(document.getElementsByName('incomeRent')[0].value);
		var incomeOther = parseFloat(document.getElementsByName('incomeOther')[0].value);

		var incomeNet = incomeRent + incomeOther;
		document.getElementById('incomeGross').innerHTML = '$'+incomeNet;

		var expenseTot = expenses(price, incomeNet);
		metrics(incomeNet, expenseTot, monPayments, price, houseCalcs[1]);
	}
})