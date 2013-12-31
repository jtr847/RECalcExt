var expenses = function (price, incomeNet) {


	// // Taxes
	// var taxStr = document.getElementsByName('tax')[0].value;
	// if (taxStr == null || taxStr.trim() == "") {
	// 	var taxes = propTax(price);
	// 	else {
	// 		var taxes = Math.round(taxStr * 100) / 100;
	// 	}
	// }

	// // Insurance
	// var insStr = document.getElementsByName('insurance')[0].value;
	// if (insStr == null || insStr.trim() == "") {
	// 	var taxes = propTax(price);
	// else {
	// 	var taxes = Math.round(taxStr * 100) / 100;
	// 	}
	// }

	// var taxStr = document.getElementsByName('tax')[0].value;
	// if (taxStr == null || taxStr.trim() == "") {
	// 	var taxes = propTax(price);
	// else {
	// 	var taxes = Math.round(taxStr * 100) / 100;
	// 	}
	// }

	// var taxStr = document.getElementsByName('tax')[0].value;
	// if (taxStr == null || taxStr.trim() == "") {
	// 	var taxes = propTax(price);
	// else {
	// 	var taxes = Math.round(taxStr * 100) / 100;
	// 	}
	// }

	// var taxStr = document.getElementsByName('tax')[0].value;
	// if (taxStr == null || taxStr.trim() == "") {
	// 	var taxes = propTax(price);
	// else {
	// 	var taxes = Math.round(taxStr * 100) / 100;
	// 	}
	// }

	// var taxStr = document.getElementsByName('tax')[0].value;
	// if (taxStr == null || taxStr.trim() == "") {
	// 	var taxes = propTax(price);
	// else {
	// 	var taxes = Math.round(taxStr * 100) / 100;
	// 	}
	// }

	var taxes = checkEmpty(price, incomeNet, 'tax');
	var insurance = insuranceExp(price);
	var vacancy = vacancyExp(incomeNet);
	var management = propMgmtExp(incomeNet);
	var reserves = capitalReserves(incomeNet);
	var repairs = repairExp(incomeNet);

	// Net expenses (not including debt financing)
	var expenseNet = taxes + insurance + vacancy + management + reserves + repairs;
	document.getElementById('totalExp').innerHTML = expenseNet;


}


var propTax = function (price) {
	var tax = Math.round(price * 0.001 * 100) / 100;
	document.getElementsByName('tax')[0].value = tax;
	return tax;
}


var insuranceExp = function (price) {
	var ins = Math.round(price * 0.0013 * 100) / 100;
	document.getElementsByName('insurance')[0].value = ins;
	return ins;
}


var vacancyExp = function (incomeNet) {
	var exp = Math.round(incomeNet * 0.1 * 100) / 100;
	document.getElementsByName('vacancyCost')[0].value = exp;
	return exp;
}


var propMgmtExp = function (incomeNet) {
	var exp = Math.round(incomeNet * 0.1 * 100) / 100;
	document.getElementsByName('managementCost')[0].value = exp;
	return exp;
}


var capitalReserves = function (incomeNet) {
	var exp = Math.round(incomeNet * 0.1 * 100) / 100;
	document.getElementsByName('reserves')[0].value = exp;
	return exp;
}


var repairExp = function (incomeNet) {
	var exp = Math.round(incomeNet * 0.1 * 100) / 100;
	document.getElementsByName('repairCost')[0].value = exp;
	return exp;
}

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

			default:
				var value = 'error';

		}
	}	
	else {
			var value = Math.round(str * 100) / 100;
	}
	
	return value;

}