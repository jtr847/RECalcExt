var expenses = function (price, incomeNet) {

	// Itemized expenses
	var taxes = checkEmpty(price, incomeNet, 'tax', 'taxChk');
	var insurance = checkEmpty(price, incomeNet, 'insurance', 'insChk');
	var vacancy = checkEmpty(price, incomeNet, 'vacancyCost', 'vacChk');
	var management = checkEmpty(price, incomeNet, 'managementCost', 'mgmtChk');
	var reserves = checkEmpty(price, incomeNet, 'reserves', 'capChk');
	var repairs = checkEmpty(price, incomeNet, 'repairCost', 'repChk');

	// Net expenses (not including debt financing)
	var expenseNet = taxes + insurance + vacancy + management + reserves + repairs;
	document.getElementById('totalExp').innerHTML = '$'+expenseNet;
	return expenseNet;
}


// Monthly property taxes
var propTax = function (price) {
	var tax = Math.round(price * 0.001 * 100) / 100;
	document.getElementsByName('tax')[0].value = tax;
	return tax;
}


// Monthly insurance expense
var insuranceExp = function (price) {
	var ins = Math.round(price * 0.0013 * 100) / 100;
	document.getElementsByName('insurance')[0].value = ins;
	return ins;
}


// Monthly vacancy expense
var vacancyExp = function (incomeNet) {
	var exp = Math.round(incomeNet * 0.1 * 100) / 100;
	document.getElementsByName('vacancyCost')[0].value = exp;
	return exp;
}


// Monthly property management expense
var propMgmtExp = function (incomeNet) {
	var exp = Math.round(incomeNet * 0.1 * 100) / 100;
	document.getElementsByName('managementCost')[0].value = exp;
	return exp;
}


// Monthly capital reserves contribution
var capitalReserves = function (incomeNet) {
	var exp = Math.round(incomeNet * 0.1 * 100) / 100;
	document.getElementsByName('reserves')[0].value = exp;
	return exp;
}


// Monthly repairs expense
var repairExp = function (incomeNet) {
	var exp = Math.round(incomeNet * 0.1 * 100) / 100;
	document.getElementsByName('repairCost')[0].value = exp;
	return exp;
}


// Function to check if a checkbox is checked, if the checkbox is checked then the corresponding field is user defined
var checkEmpty = function (price, incomeNet, searchString, chkStr) {
	
	var str = document.getElementsByName(searchString)[0].value;
	if (document.getElementsByName(chkStr)[0].checked) {
		var value = Math.round(str * 100) / 100;
	}else {
		switch (searchString) {
			case "tax":
				var value = propTax(price);
				break;

			case "insurance":
				var value = insuranceExp(price);
				break;

			case "vacancyCost":
				var value = vacancyExp(incomeNet);
				break;

			case "managementCost":
				var value = propMgmtExp(incomeNet);
				break;

			case "reserves":
				var value = capitalReserves(incomeNet);
				break;

			case "repairCost":
				var value = repairExp(incomeNet);
				break;

			default:
				alert('Something went wrong!!')
				var value = 'error';
		}
	}

	return value;
}