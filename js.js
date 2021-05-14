
// declare variable player and set player to "x"
var player = "x";
var player2 = "o"
// declare variable hint and set it to element object with
// id "hint", using document.querySelector()

var hint = document.querySelector("#hint");

// set inner HTML text of hint to "Hello" plus value
hint.innerHTML = "Hello " + player + " - select a field";
// of player plus " - select a field!" at the end


function markField (mouseEvent) {
    
	var field = mouseEvent.target;
	
	field.setAttribute("aria-label", player);
	
	field.setAttribute("disabled", "disabled");

	//change name of current player
    if (player == "x") {player = "o"; player2="x"}
    else {player = "x"; player2="o"};

    //set inner HTML text of hint to "Next player is"
    //plus value of player plus "!"

    hint.innerHTML = "Next player is " + player + "!";
	
	//call function allFieldsAreSelected
    allFieldsAreSelected();
	
    if (allFieldsAreSelected()) hint.innerHTML = "Game over!";
    
	if (youWin(player)) hint.innerHTML = "You win player " + player2; // (PABLO) 
	
	
}
function youWin(player)
{	
	var A1 = a1.getAttribute("aria-label");
	var A2 = a2.getAttribute("aria-label");
	var A3 = a3.getAttribute("aria-label");
	var B1 = b1.getAttribute("aria-label");
	var B2 = b2.getAttribute("aria-label");
	var B3 = b3.getAttribute("aria-label");
	var C1 = c1.getAttribute("aria-label");
	var C2 = c2.getAttribute("aria-label");
	var C3 = c3.getAttribute("aria-label");
	
	if	((A1!=""&&A1==A2&&A1==A3) || (B1!=""&&B1==B2&&B1==B3) || (C1!=""&&C1==C2&&C1==C3) || (A1!=""&&A1==B1&&A1==C1) || (A2!=""&&A2==B2&&A2==C2) || (A3!=""&&A3==B3&&A3==C3) || (A1!=""&&A1==B2&&A1==C3) || (A3!=""&&A3==B2&&A3==C1)) //Revisa las 8 condiciones para ganar. Que las lineas tengan el mismo valor, distinto de "".
	{a1.setAttribute("disabled", "disabled");a2.setAttribute("disabled", "disabled");a3.setAttribute("disabled", "disabled");b1.setAttribute("disabled", "disabled");b2.setAttribute("disabled", "disabled");b3.setAttribute("disabled", "disabled");c1.setAttribute("disabled", "disabled");c2.setAttribute("disabled", "disabled");c3.setAttribute("disabled", "disabled");
	return true;}
	else return false;
}

function allFieldsAreSelected() {
    //declare the variable fields and set it to the list of field objects,
    //using document.querySelectorAll();
	var fields = document.querySelectorAll("#gameboard button");

    //alert (fields.length);

    var len = fields.length;  //len for length
    
    for (var c = 0; c < len ; c ++ ) {
        var f = fields[c]; // get field object from the list fields
        // if there is an empty label, return false (exit function)
	    if ( f.getAttribute("aria-label") == "" ) {
        
       return false;
        } 
    }
  
  return true;

}






