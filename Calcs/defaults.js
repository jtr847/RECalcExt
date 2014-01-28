var defaults = function() {
	// This function clears the data from the input/output fields and returns them back to the default values
	document.getElementsByName('Calc')[0].reset();
	document.getElementById('downPay').innerHTML     = '';
	document.getElementById('downPayTxt').innerHTML  = 'Down Payment';
	document.getElementById('investBasis').innerHTML = '';
	document.getElementById('loanAmnt').innerHTML    = '';
	document.getElementById('payments').innerHTML    = '';
	document.getElementById('incomeGross').innerHTML = '$1500';
	document.getElementById('totalExp').innerHTML    = '';
	document.getElementById('monNOI').innerHTML 	 = '';
	document.getElementById('NOI').innerHTML 		 = '';
	document.getElementById('monCashFlow').innerHTML = '';
	document.getElementById('cashFlow').innerHTML    = '';
	document.getElementById('capRate').innerHTML     = '';
	document.getElementById('CCR').innerHTML         = '';
	document.getElementById('2perRuleStr').innerHTML = '';
	document.getElementById('2perRule').innerHTML    = '';

	document.getElementById('2perRuleStr').style.backgroundColor = '#F4AC42';
}