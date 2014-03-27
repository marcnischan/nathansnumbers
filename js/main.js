
var comment = { 
	small: "Hmmmm... That's odd! Ha ha! Get it? lolz.", 
    medium: "Nice!! You are humble and loveable, and you type in reasonably sized numbers.",
    large: "Now, that's a mighty big number!!! But I bet you get that a lot.",
    scolding: "You have to enter a non-negative number, silly! And no, you can't enter zero, Nathan.",
    toosmall: "There aren't any odd numbers between one and " + limit + "."
    };
    
var button = document.getElementById('button');  
var numberCorral = document.getElementById('numberCorral');

function evenate(){
  
	var limit = prompt('Choose a number to end our count at');  
	var oddNumberCount = "";
	
	function oddNumberCalculator(limit){
		
		
		if ( isNaN(limit) || limit.length < 1 ){
			numberCorral.innerHTML = comment.scolding;
		} else {
			for ( i = 1 ; i <= limit ; i++ ){
				if ( i % 2 != 0 ){
					continue;  
				} else {
					oddNumberCount++;
				} 
			}
		}
		return oddNumberCount.toString();	
	}
	
	var oddNumberCount = oddNumberCalculator(limit);
	
	numberCorral.innerHTML = '';
	
	var howBig = oddNumberCount.length;
	var whatToSay = "";
	
	if ( howBig < 2 ) {
		whatToSay = comment.small;
	} else if ( howBig >= 2 && howBig < 6) {
		whatToSay = comment.medium;
	} else if ( howBig > 6 ) {
		whatToSay = comment.large;
	}

	numberCorral.innerHTML = oddNumberCount + '! ' + whatToSay;
	
	button.innerHTML = 'Try another number?';
};


button.addEventListener('click', evenate ); 


