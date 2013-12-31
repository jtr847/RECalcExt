var calcs = function(price) {
	var houseCalcs = houseInfo(price);
	finance(price, houseCalcs[0]);
	
	var incomeRent = parseFloat(document.getElementsByName('incomeRent')[0].value);
	var incomeOther = parseFloat(document.getElementsByName('incomeOther')[0].value);

	var incomeNet = incomeRent + incomeOther;
	document.getElementById('incomeGross').innerHTML = incomeNet;

	expenses(price, incomeNet);
}