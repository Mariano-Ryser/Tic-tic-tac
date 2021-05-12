
// declare variable player and set player to "x"
var player = "x";

// declare variable hint and set it to element object with
// id "hint", using document.querySelector()

var hint = document.querySelector("#hint");
//alert(hint);

//alert (hint.innerHTML)

// set inner HTML text of hint to "Hello" plus value
hint.innerHTML = "Hello " + player + " - select a field";
// of player plus " - select a field!" at the end

//alert (hint.innerHTML)


function markField (mouseEvent) {
    var field = mouseEvent.target;

    field.setAttribute("aria-label", player);

    field.setAttribute("disabled", "disabled");

    //change name of current player
    if (player == "x") player = "o"; 
    else player = "x";

    //set inner HTML text of hint to "Next player is"
    //plus value of player plus "!"

    hint.innerHTML = "Next player is " + player + "!";

    //call function allFieldsAreSelected
    allFieldsAreSelected();

    if (allFieldsAreSelected()) hint.innerHTML = "Game over!";
    
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
        //alert("Bingo");
       return false;
        } 
    }
  //alert("Bongo");
  return true;

}








