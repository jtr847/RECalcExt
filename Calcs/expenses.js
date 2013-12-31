var expenses = function (price, incomeNet) {

	// Itemized expenses
	var taxes = checkEmpty(price, incomeNet, 'tax');
	var insurance = checkEmpty(price, incomeNet, 'insurance');
	var vacancy = checkEmpty(price, incomeNet, 'vacancyCost');
	var management = checkEmpty(price, incomeNet, 'managementCost');
	var reserves = checkEmpty(price, incomeNet, 'reserves');
	var repairs = checkEmpty(price, incomeNet, 'repairCost');

	// Net expenses (not including debt financing)
	var expenseNet = taxes + insurance + vacancy + management + reserves + repairs;
	document.getElementById('totalExp').innerHTML = expenseNet;
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


// Function to check if a field is empty, if it is not empty then the field value is used
var checkEmpty = function (price, incomeNet, searchString) {

	// Get the string in the specified text field
	var str = document.getElementsByName(searchString)[0].value;
	if (str == null || str.trim() == "") {

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
				var value = 'error';

		}
	}	
	else {
			var value = Math.round(str * 100) / 100;
	}
	
	return value;

}