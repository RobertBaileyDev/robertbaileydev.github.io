function flashtext(ele) {
	var tmpColCheck = document.getElementById( ele ).style.color;
	
	switch(tmpColCheck){
		case 'white':
			document.getElementById( ele ).style.color = 'red';
			break;
		case 'red':
			document.getElementById( ele ).style.color = 'blue';
			break;
		case 'blue':
			document.getElementById( ele ).style.color = 'green';
			break;
		case 'green':
			document.getElementById( ele ).style.color = 'white';
			break;
		default:
			document.getElementById( ele ).style.color;
			break;
	}
} 

setInterval(function() {
	flashtext('flashingtext');
	flashtext('flashingtext2');
	flashtext('flashingtext3');
}, 50 );