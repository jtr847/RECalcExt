$(document).ready(function(){
	$('#advancedChk').click(function(){
		var advanced = document.getElementsByClassName('advanced');	
		if (document.getElementById('advancedChk').checked) { 
			var str = 'none';
		} else {
			var str = 'block';
		}
		for (var i = 0; i < advanced.length; i++) {
			advanced[i].style.display = str;
		}
	});
})