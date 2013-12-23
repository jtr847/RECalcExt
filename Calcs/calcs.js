var calcs = function(price) {
	var houseCalcs = houseInfo(price);
	finance(price, houseCalcs[0]);
}