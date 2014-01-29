$(document).ready(function(){
	$('#advancedChk').click(function(){
		var advanced = document.getElementsByClassName('advanced');	
		if (document.getElementById('advancedChk').checked) { 
			var str = 'table-row';
		} else {
			var str = 'none';
		}

		for (var i = 0; i < advanced.length; i++) {
			advanced[i].style.display = str;
		}
	});
})